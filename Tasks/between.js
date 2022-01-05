// Extract substring between prefix and suffix
'use strict';

const extract = (str, prefix, suffix) => {

  prefix = prefix.replace(/(\W)/gi, '\\$1')
  suffix = suffix.replace(/(\W)/gi, '\\$1')

  const regexp = new RegExp(`^.*?${prefix}(.*?)${suffix}.*?$`);
  return str.match(regexp)[1];
};

const result = extract('Hello ??username?? and bye!', '??', '??');
console.log(result);

