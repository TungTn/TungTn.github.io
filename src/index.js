import http from "http"
import { upperCase, localeUpperCase } from "upper-case"
import url from "url"
import { myDateTime } from "./components/common.js"
import * as fs from 'fs'
import { readFileSync } from 'fs'

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    const string_output = readFileSync("filedemo.txt", 'utf8')
    string_output
    res.end()
}).listen(8080)
