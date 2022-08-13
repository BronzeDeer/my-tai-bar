#!/usr/bin/python3
import json



def parseObj(objStr):
    objStr = objStr.strip()
    pos = objStr.find("=")
    name = list(filter(lambda x: len(x)>0,objStr[:pos].split(" ")))[-1]
    jsonObj = json.loads(objStr[pos+1:])
    return name, jsonObj


def makeTags(parsedModules):
    tags = {}
    reverse_tags = {}

    def addTag(key,value):
        if key not in tags:
            tags[key] = set()
        tags[key].add(value)

        if value not in reverse_tags:
            reverse_tags[value] = set()
        reverse_tags[value].add(key)

    for cID,cocktail in parsedModules["cocktails"].items():

        if "tags" in cocktail:
            for tag in cocktail["tags"]:
                addTag(tag,cID)

        for ingredient in cocktail["ingredients"]:
            addTag(ingredient,cID)

            for inheritedTag in parsedModules["ingredients"][ingredient]["tags"]:
                addTag(inheritedTag,cID)

    #Calculate derived tags
    tags["non-alcoholic"] = parsedModules["cocktails"].keys() - tags["alcohol"]
    tags["no-milk"] = parsedModules["cocktails"].keys() - tags["milk"]
    tags["vegan"] = parsedModules["cocktails"].keys() - tags["milk"] - tags["honey"] - tags["not-vegan"] # - tags["egg"]

    #Reverse derived tags
    for t in ["non-alcoholic", "no-milk", "vegan"]:
        for cocktail in tags[t]:
            reverse_tags[cocktail].add(t)

    return {k:sorted(list(v)) for k,v in tags.items()}, {k:sorted(list(v)) for k,v in reverse_tags.items()}

parsed = {}
objStr = ""
with open("src/data/recipe-book.js","r") as book:
    for line in book:
        if "export " in line:
            if objStr:
                key, value = parseObj(objStr)
                parsed[key] = value
                objStr = ""

        objStr += line

if objStr.strip():
    key, value = parseObj(objStr)
    parsed[key] = value

with open("src/data/tags.js","w") as out:
    tags, reverse_tags = makeTags(parsed)
    out.write("export let tags = " +json.dumps(tags,indent=4,sort_keys=True)+";\n")
    out.write("export let reverse_tags = " +json.dumps(reverse_tags,indent=4,sort_keys=True)+";\n")
    print("Generated tags")
