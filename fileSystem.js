const express = require('express');
const fs = require('fs');
const rootPath = require('path');

const todo = {};

todo.createFile = (req) => {
  return new Promise((resolve) => {
    let url = rootPath.join(rootPath.resolve(), req.fileName);
    // if (fs.existsSync(url)) {
      let temp = fs.writeFileSync(url, req.fileContent);
      resolve('file Created');
    // } else {
    //   resolve('file not Created');
    // }
  });
};

todo.appendFile = (req) => {
  return new Promise((resolve) => {
    let url = rootPath.join(rootPath.resolve(), req.fileName);
    if (fs.existsSync(url)) {
      let temp = fs.appendFileSync(url, req.fileContent);
      resolve('file Append');
    } else {
      resolve('file not found');
    }
  });
};

todo.readFile = (req) => {
  return new Promise((resolve) => {
    let url = rootPath.join(rootPath.resolve(), req.fileName);
    if (fs.existsSync(url)) {
      let temp = fs.readFileSync(url, 'utf-8');
      resolve(temp);
    } else {
      resolve('file not found');
    }
  });
};

todo.deleteFile = (req) => {
  return new Promise((resolve) => {
    let url = rootPath.join(rootPath.resolve(), req.fileName);
    if (fs.existsSync(url)) {
      let temp = fs.unlinkSync(url);
      resolve('file Deleted');
    } else {
      resolve('file not found');
    }
  });
};

module.exports = todo;
