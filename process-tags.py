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

    for cID,cocktail in parsedModules["cocktails"].items():
        for ingredient in cocktail["ingredients"]:
            if ingredient not in tags:
                tags[ingredient] = set()
            tags[ingredient].add(cID)

            for inheritedTag in parsedModules["ingredients"][ingredient]["tags"]:
                if inheritedTag not in tags:
                    tags[inheritedTag] = set()
                tags[inheritedTag].add(cID)

    #Calculate derived tags
    tags["non-alcoholic"] = parsedModules["cocktails"].keys() - tags["alcohol"]
    tags["no-milk"] = parsedModules["cocktails"].keys() - tags["milk"]
    tags["vegan"] = parsedModules["cocktails"].keys() - tags["milk"] - tags["honey"] # - tags["egg"] - tags["not-vegan"]

    return {k:sorted(list(v)) for k,v in tags.items()}

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
    out.write("export let tags = " +json.dumps(makeTags(parsed),indent=4,sort_keys=True))
    print("Generated tags")