let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (data) => {
    handleUserInput(data);
  });

  return stdin;
}

const handleUserInput = data => {
  if (data === '\u0003') {
    process.exit();
  }
  else if (data === 'w') {
    connection.write('Move: up');
  }
  else if (data === 'a') {
    connection.write('Move: left');
  }
  else if (data === 's') {
    connection.write('Move: down');
  }
  else if (data === 'd') {
    connection.write('Move: right');
  }
  else if (data === 'g') {
    connection.write('Say: GL HF');
  }
  else if (data === 'h') {
    connection.write('Say: HAHAHA');
  }
  else if (data === 'j') {
    connection.write('Say: REKT');
  }
  else if (data === 'k') {
    connection.write('Say: SNEKKY');
  }
};

module.exports = setupInput;