const gulp = require('gulp'),
      autoprefixer = require('autoprefixer'),
      sass = require('gulp-sass'),
      twig = require('gulp-twig'),
      data = require('gulp-data'),
      path = require('path'),
      prettify = require('gulp-html-prettify'),
      browserSync = require('browser-sync').create();