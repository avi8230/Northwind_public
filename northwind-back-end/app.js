#!/usr/bin/env node

global.config = require("./config");
const args = require("./cli/args");
const validate = require("./cli/validate");
const displayHelp = require("./cli/display-help");
const displayVersion = require("./cli/display-version");
const server = require("./backend/server");

if (!validate()) return;
if (args.isFirstHelp()) return displayHelp();
if (args.isFirstVersion()) return displayVersion();

server.run();