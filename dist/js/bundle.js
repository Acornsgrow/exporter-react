(()=>{Pulsar.registerFunction("readableVariableName",(function(e,r,o){const t=[...r.path];r.isRoot||t.push(r.name),t.push(e.name),o&&o.length>0&&t.unshift(o);let n=t.join(" ");return n=n.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,((e,r)=>r.toUpperCase())),n=n.replace(/[^a-zA-Z0-9_]/g,"_"),/^\d/.test(n)&&(n="_"+n),n}));const e={color:{fileName:"colors",varName:"Colors",themeProperty:"colors",tokenPrefix:""},border:{fileName:"borders",varName:"Borders",themeProperty:"borders",tokenPrefix:""},gradient:{fileName:"gradients",varName:"Gradients",themeProperty:"gradients",tokenPrefix:""},measure:{fileName:"measures",varName:"Measures",themeProperty:"measures",tokenPrefix:""},shadow:{fileName:"shadows",varName:"Shadows",themeProperty:"shadows",tokenPrefix:""},typography:{fileName:"typography",varName:"Typographies",themeProperty:"typographies",tokenPrefix:""},radius:{fileName:"radii",varName:"Raddii",themeProperty:"radii",tokenPrefix:""},unknown:{fileName:"uknown",varName:"Unknowns",themeProperty:"unknowns",tokenPrefix:""}};Pulsar.registerFunction("getBehavior",(function(r){return e[r.toLowerCase()]||e.unknown})),Pulsar.registerFunction("buildReferenceMeta",(function(e,r){return{tokenType:e,referencedToken:r.referencedToken}})),Pulsar.registerFunction("getComponentTokens",(function(e,r){if(r){const o=e.at(0)?.properties?.find((e=>"component"===e?.codeName))?.options??[],t=o.find((e=>e?.name===r))?.id??"";return e.filter((e=>e?.propertyValues?.component===t))}return e.filter((e=>void 0===e?.propertyValues?.component))}))})();