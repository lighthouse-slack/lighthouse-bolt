const { addHttpProtocol, validateURL, shortenURL } = require('../../src/helpers/url-helper');
const TinyURL = require('tinyurl');

describe('UrlHelper Tests', () => {

  let credentials, app, postMessageSpy;

  beforeEach(()=> {
    postMessageSpy = jest.fn();
    app = {
      client: {
        chat: {
          postMessage: postMessageSpy
        }
      }
    }
    credentials = {
      app,
      token: Math.random(),
      channel: Math.random()
    }
  });

  describe('addHttpProtocol tests', () => {

    it('should return url with protocol when addHttpProtocol is called', () => {
      const testUrl = 'example.com';
      const testUrlWithProtocol = 'http://example.com';

      expect(addHttpProtocol(testUrl)).toEqual(testUrlWithProtocol);
      expect(addHttpProtocol(testUrlWithProtocol)).toEqual(testUrlWithProtocol);
    });

  });

  describe('validateURL tests', () => {

    it('should return true if url is valid', () => {
      const testUrl = 'https://example.com';
      expect(validateURL(testUrl)).toBeTruthy();
    });

    it('should return false if url is invalid', () => {
      const testUrl = 'invalid url';
      expect(validateURL(testUrl)).toBeFalsy();
    });

    it('should return false if url is an empty string', () => {
      const testUrl = '';
      expect(validateURL(testUrl)).toBeFalsy();
    });

    it('should return false if url is not a string', () => {
      const testUrl = 21;
      expect(validateURL(testUrl)).toBeFalsy();
    });

  });

  describe('shortenURL tests', () => {

    it('should return shortURL when shortenURL is called', async () => {
      const testUrl = 'https://example.com';
      const testTinyUrl = 'https://tinyurl.com/test';
      TinyURL.shorten = jest.fn().mockImplementation(() => testTinyUrl);
      expect(await shortenURL(credentials, testUrl)).toEqual(testTinyUrl);
    });

    it('should return nothing when shortenURL is called and error is caught', async () => {
      const testUrl = 'https://example.com';
      const err = new Error();
      const throwErrorSpy = jest.fn().mockImplementation(() => { throw err });
      TinyURL.shorten = throwErrorSpy;
      expect(await shortenURL(credentials, testUrl)).toEqual();
    });

  });

});