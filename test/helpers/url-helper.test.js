const { validateURL, shortenURL } = require('../../src/helpers/url-helper');
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

  it('should return true if url is valid  when validateUrl is called', () => {
    const testUrl = 'https://example.com';
    expect(validateURL(testUrl)).toBeTruthy();
  });

  it('should return false if url is invalid when validateUrl is called', () => {
    const testUrl = 'invalid url';
    expect(validateURL(testUrl)).toBeFalsy();
  });

  it('should return false if no URL when empty Url is called', () => {
    const testUrl = '';
    expect(validateURL(testUrl)).toBeFalsy();
  });

  it('should return false if no URL when invalidate Url is called', () => {
    const testUrl = 21;
    expect(validateURL(testUrl)).toBeFalsy();
  });

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