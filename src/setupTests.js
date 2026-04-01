const { TextDecoder, TextEncoder } = require('util');
const { ReadableStream, WritableStream, TransformStream } = require('stream/web');
const { MessageChannel, MessagePort } = require('worker_threads');

if (!global.TextEncoder) {
  global.TextEncoder = TextEncoder;
}

if (!global.TextDecoder) {
  global.TextDecoder = TextDecoder;
}

if (!global.ReadableStream) {
  global.ReadableStream = ReadableStream;
}

if (!global.WritableStream) {
  global.WritableStream = WritableStream;
}

if (!global.TransformStream) {
  global.TransformStream = TransformStream;
}

if (!global.MessageChannel) {
  global.MessageChannel = MessageChannel;
}

if (!global.MessagePort) {
  global.MessagePort = MessagePort;
}

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
