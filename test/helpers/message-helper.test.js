const { sendMessage, deleteMessage } = require('../../src/helpers/message-helper');

describe('MessageHelper Tests', () => {

  let credentials, app, postMessageSpy, deleteSpy, consoleErrorSpy;

  beforeEach(()=> {
    postMessageSpy = jest.fn();
    deleteSpy = jest.fn();
    consoleErrorSpy = jest.fn();
    app = {
      client: {
        chat: {
          postMessage: postMessageSpy,
          delete: deleteSpy
        }
      }
    }
    credentials = {
      app,
      token: Math.random(),
      channel: Math.random()
    }
    window.console = {
      error: consoleErrorSpy
    }
  });

  it('should call app.client.chat.postMessage with proper arguments when sendMessage is called', async () => {
    const message = 'Test';
    await sendMessage(credentials, { text: message });
    await expect(app.client.chat.postMessage).toBeCalledWith({
      token: credentials.token,
      channel: credentials.channel,
      text: message
    });
  });

  it('should call console.error when sendMessage is called and error is caught', async () => {
    const err = new Error();
    const throwErrorSpy = jest.fn().mockImplementation(() => { throw err });
    const newApp = {
      client: {
        chat: {
          postMessage: throwErrorSpy
        }
      }
    }
    const newCredentials = {
      ...credentials,
      app: newApp
    }
    const message = 'Test';
    await sendMessage(newCredentials, { text: message });
    expect(console.error).toBeCalledWith(err);
  });

  it('should call app.client.chat.delete with proper arguments when deleteMessage is called', async () => {
    const ts = '0123456789';
    await deleteMessage(credentials, ts);
    await expect(app.client.chat.delete).toBeCalledWith({
      token: credentials.token,
      channel: credentials.channel,
      ts
    });
  });

  it('should call console.error when deleteMessage is called and error is caught', async () => {
    const err = new Error();
    const throwErrorSpy = jest.fn().mockImplementation(() => { throw err });
    const newApp = {
      client: {
        chat: {
          delete: throwErrorSpy
        }
      }
    }
    const newCredentials = {
      ...credentials,
      app: newApp
    }
    const ts = '0123456789';
    await deleteMessage(newCredentials, ts);
    expect(console.error).toBeCalledWith(err);
  });

});