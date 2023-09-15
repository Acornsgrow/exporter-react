/**
 * Convert group name, token name and possible prefix into camelCased string, joining everything together
 */

/* global Pulsar */
Pulsar.registerFunction(
  'readableVariableName',
  function (token, tokenGroup, prefix) {
    // Create array with all path segments and token name at the end
    const segments = [...tokenGroup.path]
    if (!tokenGroup.isRoot) {
      segments.push(tokenGroup.name)
    }
    segments.push(token.name)

    if (prefix && prefix.length > 0) {
      segments.unshift(prefix)
    }

    // Create "sentence" separated by spaces so we can camelcase it all
    let sentence = segments.join(' ')

    // Return camelcased string from all segments
    sentence = sentence
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())

    // only allow letters, digits, underscore
    sentence = sentence.replace(/[^a-zA-Z0-9_]/g, '_')

    // prepend underscore if it starts with digit
    if (/^\d/.test(sentence)) {
      sentence = '_' + sentence
    }

    return sentence
  },
)

/**
 * Behavior configuration of the exporter
 * Prefixes: Add prefix for each category of the tokens. For example, all colors can start with "color, if needed"
 */
const BEHAVIOR = {
  color: {
    fileName: 'colors', // this should be somehow synced with output.json contents
    varName: 'colors',
    themeProperty: 'colors',
    tokenPrefix: '',
  },
  border: {
    fileName: 'borders', // this should be somehow synced with output.json contents
    varName: 'borders',
    themeProperty: 'borders',
    tokenPrefix: '',
  },
  gradient: {
    fileName: 'gradients', // this should be somehow synced with output.json contents
    varName: 'gradients',
    themeProperty: 'gradients',
    tokenPrefix: '',
  },
  measure: {
    fileName: 'measures', // this should be somehow synced with output.json contents
    varName: 'measures',
    themeProperty: 'measures',
    tokenPrefix: '',
  },

  shadow: {
    fileName: 'shadows', // this should be somehow synced with output.json contents
    varName: 'shadows',
    themeProperty: 'shadows',
    tokenPrefix: '',
  },
  typography: {
    fileName: 'typography', // this should be somehow synced with output.json contents
    varName: 'typographies',
    themeProperty: 'typographies',
    tokenPrefix: '',
  },
  radius: {
    fileName: 'radii', // this should be somehow synced with output.json contents
    varName: 'radii',
    themeProperty: 'radii',
    tokenPrefix: '',
  },
  unknown: {
    fileName: 'uknown',
    varName: 'unknowns',
    themeProperty: 'unknowns',
    tokenPrefix: '',
  },
}

Pulsar.registerFunction('getBehavior', function (tokenType) {
  return BEHAVIOR[tokenType.toLowerCase()] || BEHAVIOR['unknown']
})

Pulsar.registerFunction('buildReferenceMeta', function (tokenType, tokenValue) {
  return {
    tokenType,
    referencedToken: tokenValue.referencedToken,
  }
})

Pulsar.registerFunction('getReferenceTokens', function (tokens) {
  const referencedTokens = []
  tokens.forEach((token) => {
    if (token?.value?.referencedToken) {
      if (
        referencedTokens.findIndex(
          (referencedToken) =>
            token.value.referencedToken.id === referencedToken.id,
        ) === -1
      ) {
        referencedTokens.push(token.value.referencedToken)
      }
    }
  })
  return referencedTokens
})

Pulsar.registerFunction('getComponentTokens', function (tokens, componentType) {
  if (componentType) {
    const componentTypes =
      tokens.at(0)?.properties?.find((prop) => prop?.codeName === 'component')
        ?.options ?? []

    const currentComponentId =
      componentTypes.find((prop) => prop?.name === componentType)?.id ?? ''

    return tokens.filter(
      (token) => token?.propertyValues?.component === currentComponentId,
    )
  } else {
    return tokens.filter(
      (token) => token?.propertyValues?.component === undefined,
    )
  }
})
