// config.js
module.exports = {
  source: [`assets/tokens/**/*.json`],
  platforms: {
    "css": {
      "transformGroup": "css",
      "buildPath": "dist/css/",
      "files": [
        {
          "destination": "_variables.css",
          "format": "css/variables"
        }
      ]
    },
    "scss": {
      "transformGroup": "scss",
      "buildPath": "dist/scss/",
      "files": [
        {
          "destination": "_variables.scss",
          "format": "scss/variables"
        }
      ]
    },
    "android": {
      "transformGroup": "android",
      "buildPath": "dist/android/",
      "files": [
        {
          "destination": "font_dimens.xml",
          "format": "android/fontDimens"
        },
        {
          "destination": "colors.xml",
          "format": "android/colors"
        }
      ]
    },
    "compose": {
      "transformGroup": "compose",
      "buildPath": "dist/compose/",
      "files": [
        {
          "destination": "StyleDictionaryColor.kt",
          "format": "compose/object",
          "className": "StyleDictionaryColor",
          "packageName": "StyleDictionaryColor",
          "filter": {
            "attributes": {
              "category": "color"
            }
          }
        },
        {
          "destination": "StyleDictionarySize.kt",
          "format": "compose/object",
          "className": "StyleDictionarySize",
          "packageName": "StyleDictionarySize",
          "type": "float",
          "filter": {
            "attributes": {
              "category": "size"
            }
          }
        }
      ]
    },
    "ios": {
      "transformGroup": "ios",
      "buildPath": "dist/ios/",
      "files": [
        {
          "destination": "StyleDictionaryColor.h",
          "format": "ios/colors.h",
          "className": "StyleDictionaryColor",
          "type": "StyleDictionaryColorName",
          "filter": {
            "attributes": {
              "category": "color"
            }
          }
        },
        {
          "destination": "StyleDictionaryColor.m",
          "format": "ios/colors.m",
          "className": "StyleDictionaryColor",
          "type": "StyleDictionaryColorName",
          "filter": {
            "attributes": {
              "category": "color"
            }
          }
        },
        {
          "destination": "StyleDictionarySize.h",
          "format": "ios/static.h",
          "className": "StyleDictionarySize",
          "type": "float",
          "filter": {
            "attributes": {
              "category": "size"
            }
          }
        },
        {
          "destination": "StyleDictionarySize.m",
          "format": "ios/static.m",
          "className": "StyleDictionarySize",
          "type": "float",
          "filter": {
            "attributes": {
              "category": "size"
            }
          }
        }
      ]
    },
    "ios-swift": {
      "transformGroup": "ios-swift",
      "buildPath": "dist/ios-swift/",
      "files": [
        {
          "destination": "StyleDictionary+Class.swift",
          "format": "ios-swift/class.swift",
          "className": "StyleDictionaryClass",
          "filter": {}
        },
        {
          "destination": "StyleDictionary+Enum.swift",
          "format": "ios-swift/enum.swift",
          "className": "StyleDictionaryEnum",
          "filter": {}
        },
        {
          "destination": "StyleDictionary+Struct.swift",
          "format": "ios-swift/any.swift",
          "className": "StyleDictionaryStruct",
          "filter": {},
          "options": {
            "imports": "SwiftUI",
            "objectType": "struct",
            "accessControl": "internal"
          }
        }
      ]
    },
    "ios-swift-separate-enums": {
      "transformGroup": "ios-swift-separate",
      "buildPath": "dist/ios-swift/",
      "files": [
        {
          "destination": "StyleDictionaryColor.swift",
          "format": "ios-swift/enum.swift",
          "className": "StyleDictionaryColor",
          "filter": {
            "attributes": {
              "category": "color"
            }
          }
        },
        {
          "destination": "StyleDictionarySize.swift",
          "format": "ios-swift/enum.swift",
          "className": "StyleDictionarySize",
          "filter": {
            "attributes": {
              "category": "size"
            }
          }
        }
      ]
    }
  }
}