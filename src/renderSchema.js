'use strict'

// function getTypeURL (type) {
//   const url = `#${type.name.toLowerCase()}`
//   if (typeMap[type.name]) {
//     return url
//   } else if (typeof unknownTypeURL === 'function') {
//     return unknownTypeURL(type)
//   } else if (unknownTypeURL) {
//     return unknownTypeURL + url
//   }
// }

function sortBy (arr, property) {
  arr.sort((a, b) => {
    const aValue = a[property]
    const bValue = b[property]
    if (aValue > bValue) return 1
    if (bValue > aValue) return -1
    return 0
  })
}

function renderType (type) {
  if (type.kind === 'NON_NULL') {
    return renderType(type.ofType) + '!'
  }
  if (type.kind === 'LIST') {
    return `[${renderType(type.ofType)}]`
  }
  // const url = options.getTypeURL(type)
  // return url ? `<a href="${url}">${type.name}</a>` : type.name
  return type.name
}

function renderObject (type, options) {
  options = options || {}
  const skipTitle = options.skipTitle === true
  const printer = options.printer || console.log
  // const getTypeURL = options.getTypeURL
  // const getTypeURL = type => {
  //   return ''
  // }

  if (!skipTitle) {
    printer(`\n### ${type.name}\n`)
  }
  if (type.description) {
    printer(`${type.description}\n`)
  }
  printer('<table>')
  printer('<thead>')
  printer('<tr>')
  printer('<th align="left">Field</th>')
  printer('<th align="right">Argument</th>')
  printer('<th align="left">Type</th>')
  printer('<th align="left">Description</th>')
  printer('</tr>')
  printer('</thead>')
  printer('<tbody>')
  type.fields.forEach(field => {
    printer('<tr>')
    printer(
      `<td colspan="2" valign="top"><strong>${field.name}</strong>${field.isDeprecated
        ? ' ⚠️'
        : ''}</td>`
    )
    printer(`<td valign="top">${renderType(field.type)}</td>`)
    if (field.description || field.isDeprecated) {
      printer('<td>')
      if (field.description) {
        printer(`\n${field.description}\n`)
      }
      if (field.isDeprecated) {
        printer('<p>⚠️ <strong>DEPRECATED</strong></p>')
        if (field.deprecationReason) {
          printer('<blockquote>')
          printer(`\n${field.deprecationReason}\n`)
          printer('</blockquote>')
        }
      }
      printer('</td>')
    } else {
      printer('<td></td>')
    }
    printer('</tr>')
    if (field.args.length) {
      field.args.forEach((arg, i) => {
        printer('<tr>')
        printer(`<td colspan="2" align="right" valign="top">${arg.name}</td>`)
        printer(`<td valign="top">${renderType(arg.type)}</td>`)
        if (arg.description) {
          printer('<td>')
          printer(`\n${arg.description}\n`)
          printer('</td>')
        } else {
          printer(`<td></td>`)
        }
        printer('</tr>')
      })
    }
  })
  printer('</tbody>')
  printer('</table>')
}

function renderContent (
  queries,
  mutations,
  objects,
  enums,
  scalars,
  interfaces,
  options
) {
  options = options || {}
  const printer = options.printer || console.log

  printer('<details>')
  printer('  <summary><strong>Table of Contents</strong></summary>\n')
  if (queries) {
    printer('  * [Queries](#queries)')
    queries.fields.forEach(type => {
      printer(`    * [${type.name}](#${type.name.toLowerCase()})`)
    })
  }
  if (mutations) {
    printer('  * [Mutations](#mutations)')
    mutations.fields.forEach(type => {
      printer(`    * [${type.name}](#${type.name.toLowerCase()})`)
    })
  }
  if (objects.length) {
    printer('  * [Objects](#objects)')
    objects.forEach(type => {
      printer(`    * [${type.name}](#${type.name.toLowerCase()})`)
    })
  }
  if (enums.length) {
    printer('  * [Enums](#enums)')
    enums.forEach(type => {
      printer(`    * [${type.name}](#${type.name.toLowerCase()})`)
    })
  }
  if (scalars.length) {
    printer('  * [Scalars](#scalars)')
    scalars.forEach(type => {
      printer(`    * [${type.name}](#${type.name.toLowerCase()})`)
    })
  }
  if (interfaces.length) {
    printer('  * [Interfaces](#interfaces)')
    interfaces.forEach(type => {
      printer(`    * [${type.name}](#${type.name.toLowerCase()})`)
    })
  }
  printer('\n</details>')
}

function renderQueries (queries) {
  const options = {}
  const printer = options.printer || console.log

  printer(`\n## Queries`)
  if (queries) {
    renderObject(queries, { skipTitle: true, printer })
  }
}

function renderMutations (mutations) {
  const options = {}
  const printer = options.printer || console.log

  printer(`\n## Mutations`)
  if (mutations) {
    renderObject(mutations, { skipTitle: true, printer })
  }
}

function renderObjects (objects) {
  const options = {}
  const printer = options.printer || console.log

  if (objects.length) {
    printer('\n## Objects')

    objects.forEach(type => renderObject(type, { printer }))
  }
}

function renderEnums (enums) {
  const options = {}
  const printer = options.printer || console.log

  if (enums.length) {
    printer('\n## Enums')

    enums.forEach(type => {
      printer(`\n### ${type.name}\n`)
      if (type.description) {
        printer(`${type.description}\n`)
      }
      printer('<table>')
      printer('<thead>')
      printer('<th align="left">Value</th>')
      printer('<th align="left">Description</th>')
      printer('</thead>')
      printer('<tbody>')
      type.enumValues.forEach(value => {
        printer('<tr>')
        printer(
          `<td valign="top"><strong>${value.name}</strong>${value.isDeprecated
            ? ' ⚠️'
            : ''}</td>`
        )
        if (value.description || value.isDeprecated) {
          printer('<td>')
          if (value.description) {
            printer(`\n${value.description}\n`)
          }
          if (value.isDeprecated) {
            printer('<p>⚠️ <strong>DEPRECATED</strong></p>')
            if (value.deprecationReason) {
              printer('<blockquote>')
              printer(`\n${value.deprecationReason}\n`)
              printer('</blockquote>')
            }
          }
          printer('</td>')
        } else {
          printer('<td></td>')
        }
        printer('</tr>')
      })
      printer('</tbody>')
      printer('</table>')
    })
  }
}

function renderScalars (scalars) {
  const options = {}
  const printer = options.printer || console.log

  if (scalars.length) {
    printer('\n## Scalars\n')

    scalars.forEach(type => {
      printer(`### ${type.name}\n`)
      if (type.description) {
        printer(`${type.description}\n`)
      }
    })
  }
}

function renderInterfaces (interfaces) {
  const options = {}
  const printer = options.printer || console.log

  if (interfaces.length) {
    printer('\n## Interfaces\n')

    interfaces.forEach(type => renderObject(type, { printer }))
  }
}

function renderSchema (schema, options) {
  options = options || {}
  const title = options.title || 'Schema Types'
  const prologue = options.prologue || ''
  const epilogue = options.epilogue || ''
  const printer = options.printer || console.log
  // const unknownTypeURL = options.unknownTypeURL

  if (schema.__schema) {
    schema = schema.__schema
  }

  const types = schema.types.filter(type => !type.name.startsWith('__'))
  // const typeMap = schema.types.reduce((typeMap, type) => {
  //   console.log('--------1')
  //   console.log(typeMap)
  //   console.log('--------2')
  //   console.log(type)
  //   console.log('--------3')
  //   return Object.assign(typeMap, { [type.name]: type })
  // }, {})

  // const getTypeURL = type => {
  //   const url = `#${type.name.toLowerCase()}`
  //   if (typeMap[type.name]) {
  //     return url
  //   } else if (typeof unknownTypeURL === 'function') {
  //     return unknownTypeURL(type)
  //   } else if (unknownTypeURL) {
  //     return unknownTypeURL + url
  //   }
  // }
  // const getTypeURL = type => {
  //   return ''
  // }

  const queries =
    schema.queryType && types.find(type => type.name === schema.queryType.name)
  const mutations =
    schema.mutationType &&
    types.find(type => type.name === schema.mutationType.name)
  const objects = types.filter(
    type => type.kind === 'OBJECT' && type !== queries && type !== mutations
  )
  const enums = types.filter(type => type.kind === 'ENUM')
  const scalars = types.filter(type => type.kind === 'SCALAR')
  const interfaces = types.filter(type => type.kind === 'INTERFACE')

  sortBy(objects, 'name')
  sortBy(enums, 'name')
  sortBy(scalars, 'name')
  sortBy(interfaces, 'name')

  printer(`# ${title}\n`)

  if (prologue) {
    printer(`${prologue}\n`)
  }

  renderContent(
    queries,
    mutations,
    objects,
    enums,
    scalars,
    interfaces,
    options
  )

  renderQueries(queries)
  renderMutations(mutations)
  renderObjects(objects)
  renderEnums(enums)
  renderScalars(scalars)
  renderInterfaces(interfaces)

  if (epilogue) {
    printer(`\n${epilogue}`)
  }
}

module.exports = renderSchema
