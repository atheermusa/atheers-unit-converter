const expect = require('chai').expect
const rewire = require('rewire');

// let index = rewire('../bin/index.js')
let converter = rewire('../lib/converter.js')

describe('UNITS', () => {
    let UNITS = converter.__get__("UNITS");

    it('should be an object', () => {
        expect(UNITS).to.be.an('object')
    })
})


describe('converterFunc', () => {
    let converterFunc = converter.__get__("converterFunc");

    it('should be a function', () => {
        expect(converterFunc).to.be.a('function');
    });

    it('should take in a string and convert it', () => {
        expect(converterFunc("500 cm in m")).to.equal('5 m')
    })

    it('should return a string', () => {
        expect(converterFunc("5 m in cm")).to.be.a('string', '500 cm')
    })

    it('should return an error message if input is wrong format', () => {
        expect(converterFunc("I want to convert 33 GB into KB")).to.be.a('string', 'Error! This unit is not currerntly supported. Please try again.')
    })
})