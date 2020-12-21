'use strict';

var cyrillicToTranslit = require('..');
var assert = require('assert');
var should = require('should');

describe('cyrillicToTranslit', () => {
    it('cyrillicToTranslit should return an object with 1 public method transform', () => {
        var c2t = cyrillicToTranslit({preset: "ru"});
        c2t.should.be.a.Object();
        c2t.should.have.property('transform');
        c2t.transform.should.be.a.Function();
    });
    describe('transform', () => {
        it('should return empty string when parameters are empty', () => {
            assert.equal("", cyrillicToTranslit({preset: "ru"}).transform());
            assert.equal("", cyrillicToTranslit({preset: "ru"}).transform(null));
        });
        it('should return translit when cyrillic string not normalized', () => {
            assert.equal("russkii", cyrillicToTranslit({preset: "ru"}).transform("русский".normalize('NFD')));
        });
        it('should return translit when first parameter cyrillic', () => {
            assert.equal("privet mir!", cyrillicToTranslit({preset: "ru"}).transform("привет мир!"));
        });
        it('should return translit when first parameter cyrillic with using ыьъ', () => {
            assert.equal("uchebnii_material_1!", cyrillicToTranslit({preset: "ru"}).transform("учебный материал 1ьъ!", '_'));
        });
        it('should return translit when first parameter cyrillic with using ъ', () => {
            assert.equal("novii_podezd", cyrillicToTranslit({preset: "ru"}).transform("новый подъезд", '_'));
        });
        it('should return translit when first parameter cyrillic with using ь', () => {
            assert.equal("plokhaya_svyaz", cyrillicToTranslit({preset: "ru"}).transform("плохая связь", '_'));
        });
        it('should handle й in first position and other positions differently', () => {
            assert.equal("vkusnii yogurt", cyrillicToTranslit({preset: "ru"}).transform("вкусный йогурт"));
        });
        it('should transform digraphs to uppercase correctly', () => {
            assert.equal("Yaroslavl i Yekaterinburg", cyrillicToTranslit({preset: "ru"}).transform("Ярославль и Екатеринбург"));
        });
        it('should return translit with replaced " " on "_"', () => {
            assert.equal("privet_mir!", cyrillicToTranslit({preset: "ru"}).transform("привет мир!", "_"));
        });
        it('should return translit if translit passed', () => {
            assert.equal("privet mir!", cyrillicToTranslit({preset: "ru"}).transform("privet mir!"));
        });
        it('should return cyrillic when using reverse function for Russian', () => {
            assert.equal(
                "улица Союза Печатников",
                cyrillicToTranslit({preset: "ru"}).reverse("ulitsa Soyuza Pechatnikov")
            );
        });

        it('should return cyrillic if cyrillic is passed to reverse', () => {
            assert.equal("привет мир!", cyrillicToTranslit({preset: "ru"}).reverse("привет мир!"));
        });
    });
});
