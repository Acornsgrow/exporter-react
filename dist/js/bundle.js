(()=>{Pulsar.registerFunction("readableVariableName",(function(e,r,a){const o=[...r.path];r.isRoot||o.push(r.name),o.push(e.name),a&&a.length>0&&o.unshift(a);let t=o.join(" ");return t=t.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,((e,r)=>r.toUpperCase())),t=t.replace(/[^a-zA-Z0-9_]/g,"_"),/^\d/.test(t)&&(t="_"+t),t}));const e={color:{fileName:"colors",varName:"Colors",themeProperty:"colors",tokenPrefix:""},border:{fileName:"borders",varName:"Borders",themeProperty:"borders",tokenPrefix:""},gradient:{fileName:"gradients",varName:"Gradients",themeProperty:"gradients",tokenPrefix:""},measure:{fileName:"measures",varName:"Measures",themeProperty:"measures",tokenPrefix:""},shadow:{fileName:"shadows",varName:"Shadows",themeProperty:"shadows",tokenPrefix:""},typography:{fileName:"typography",varName:"Typographies",themeProperty:"typographies",tokenPrefix:""},radius:{fileName:"radii",varName:"Raddii",themeProperty:"radii",tokenPrefix:""},unknown:{fileName:"uknown",varName:"Unknowns",themeProperty:"unknowns",tokenPrefix:""}};Pulsar.registerFunction("getBehavior",(function(r){return e[r.toLowerCase()]||e.unknown})),Pulsar.registerFunction("buildReferenceMeta",(function(e,r){return{tokenType:e,referencedToken:r.referencedToken}}))})();