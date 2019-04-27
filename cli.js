#!/usr/bin/env node

const clipboardy = require('clipboardy')

const [, , ...args] = process.argv

if (args.length === 0) {
    console.warn('Invalid command usage. Please use `guidc <guid-string>`')
    process.exit(1)
}

const guid = args[0]

let convert

if (guid.includes('-')) {
    convert = require('raw-guid-converter').convertString
} else {
    convert = require('raw-guid-converter').convertRaw
}

let convertedGuid

try {
    convertedGuid = convert(guid)
} catch {
    console.warn('Wrong GUID format')
    process.exit(1)
}

clipboardy.writeSync(convertedGuid.toUpperCase())
console.log('Successfully converted GUID to clipboard')