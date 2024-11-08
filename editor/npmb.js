Blockly.Blocks['npm_install'] = {
  init: function() {
    this.appendValueInput("package")
        .setCheck("String")
        .appendField("package");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['npm_install'] = function(block) {
  const _package = javascript.valueToCode(block, 'package', javascript.Order.ATOMIC);
  const code = `require('child_process').exec('npm install ${_package}', (err, stdout, stderr) => { 
    if (err) console.error('Error:', err); 
    else {
      if (stdout) console.log(stdout); 
      if (stderr) console.error(stderr); 
    } 
  });\n`;
  return code;
};

Blockly.Blocks['npm_raw'] = {
  init: function() {
    this.appendValueInput("command")
        .setCheck("String")
        .appendField("command");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['npm_raw'] = function(block) {
  const _command = javascript.valueToCode(block, 'command', javascript.Order.ATOMIC);
  const code = `require('child_process').exec('npm ${_command}', (err, stdout, stderr) => { 
    if (err) console.error('Error:', err); 
    else {
      if (stdout) console.log(stdout); 
      if (stderr) console.error(stderr); 
    } 
  });\n`;
  return code;
};