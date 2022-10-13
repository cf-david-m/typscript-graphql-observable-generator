import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  hooks: { afterAllFileWrite: ['prettier --write'] },
  emitLegacyCommonJSImports: false,
  generates: {
    './dev-test/test-schema/resolvers-types.ts': {
      schema: './dev-test/test-schema/schema-text.js',
      plugins: ['typescript', 'typescript-resolvers'],
    },
    './dev-test/test-schema/flow-types.flow.js': {
      schema: './dev-test/test-schema/schema.json',
      plugins: ['flow', 'flow-resolvers'],
    },
    './dev-test/test-schema/resolvers-root.ts': {
      schema: './dev-test/test-schema/schema-with-root.graphql',
      plugins: ['typescript', 'typescript-resolvers'],
    },
    './dev-test/test-schema/resolvers-federation.ts': {
      schema: './dev-test/test-schema/schema-federation.graphql',
      config: { federation: true },
      plugins: ['typescript', 'typescript-resolvers'],
    },
    './dev-test/test-schema/resolvers-stitching.ts': {
      schema: './dev-test/test-schema/schema-text.js',
      plugins: ['typescript', { 'typescript-resolvers': { noSchemaStitching: false } }],
    },
    './dev-test/test-schema/typings.ts': {
      schema: './dev-test/test-schema/schema.json',
      plugins: ['typescript', 'typescript-resolvers'],
    },
    './dev-test/test-schema/typings.avoidOptionals.ts': {
      schema: './dev-test/test-schema/schema.json',
      config: { avoidOptionals: true },
      plugins: ['typescript'],
    },
    './dev-test/test-schema/typings.wrapped.ts': {
      schema: './dev-test/test-schema/schema.json',
      plugins: [
        { add: { content: 'declare namespace GraphQL {' } },
        { add: { placement: 'append', content: '}' } },
        'typescript',
        'typescript-operations',
      ],
    },
    './dev-test/test-schema/env.types.ts': { schema: process.env.SCHEMA_PATH, plugins: ['typescript'] },
    './dev-test/test-schema/typings.immutableTypes.ts': {
      schema: './dev-test/test-schema/schema.json',
      config: { imutableTypes: true },
      plugins: ['typescript'],
    },
    './dev-test/test-schema/typings.enum.ts': {
      schema: './dev-test/test-schema/schema-object.js',
      plugins: ['typescript'],
    },
    './dev-test/githunt/graphql-declared-modules.d.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: ['./dev-test/githunt/**/*.graphql'],
      plugins: ['typescript-graphql-files-modules'],
    },
    './dev-test/githunt/typed-document-nodes.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    },
    './dev-test/githunt/flow.flow.js': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      plugins: ['flow', 'flow-operations'],
    },
    './dev-test/githunt/types.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      plugins: ['typescript', 'typescript-operations'],
    },
    './dev-test/githunt/types.preResolveTypes.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      config: { preResolveTypes: true },
      plugins: ['typescript', 'typescript-operations'],
    },
    './dev-test/githunt/types.onlyEnums.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      config: { onlyEnums: true },
      plugins: ['typescript'],
    },
    './dev-test/githunt/types.preResolveTypes.onlyOperationTypes.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      config: { preResolveTypes: true, onlyOperationTypes: true },
      plugins: ['typescript', 'typescript-operations'],
    },
    './dev-test/githunt/types.flatten.preResolveTypes.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      config: { preResolveTypes: true, flattenGeneratedTypes: true },
      plugins: ['typescript', 'typescript-operations'],
    },
    './dev-test/githunt/types.enumsAsTypes.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      config: { enumsAsTypes: true },
      plugins: ['typescript', 'typescript-operations'],
    },
    './dev-test/githunt/types.d.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      config: { enumsAsTypes: true },
      plugins: ['typescript', 'typescript-operations'],
    },
    './dev-test/githunt/types.avoidOptionals.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      config: { avoidOptionals: true },
      plugins: ['typescript', 'typescript-operations'],
    },
    './dev-test/githunt/types.immutableTypes.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      config: { immutableTypes: true },
      plugins: ['typescript', 'typescript-operations'],
    },
    './dev-test/githunt/types.reactApollo.tsx': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
    './dev-test/githunt/types.reactApollo.v2.tsx': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      config: { reactApolloVersion: 2 },
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
    './dev-test/githunt/types.reactApollo.customSuffix.tsx': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      config: { operationResultSuffix: 'MyOperation' },
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
    './dev-test/githunt/types.reactApollo.preResolveTypes.tsx': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      config: { preResolveTypes: true },
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
    './dev-test/githunt/types.reactApollo.hooks.tsx': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
    './dev-test/githunt/types.react-query.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
      config: { addInfiniteQuery: true },
    },
    './dev-test/githunt/types.rtk-query.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      plugins: [
        { add: { content: 'module.hot?.accept();' } },
        'typescript',
        'typescript-operations',
        {
          'typescript-rtk-query': {
            importBaseApiFrom: '../../packages/plugins/typescript/rtk-query/tests/baseApi',
            exportHooks: true,
            overrideExisting: 'module.hot?.status() === "apply"',
          },
        },
      ],
    },
    './dev-test/githunt/types.apolloAngular.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
    },
    './dev-test/githunt/types.apolloAngular.sdk.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      config: { sdkClass: true },
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
    },
    './dev-test/githunt/types.stencilApollo.tsx': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      plugins: ['typescript', 'typescript-operations', 'typescript-stencil-apollo'],
    },
    './dev-test/githunt/types.urql.tsx': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-urql',
        'urql-introspection',
        'typescript-urql-graphcache',
      ],
    },
    './dev-test/githunt': {
      schema: './dev-test/githunt/schema.json',
      documents: [
        './dev-test/githunt/**/*.graphql',
        './dev-test/githunt-invalid/**/*.graphql',
        '!./dev-test/githunt-invalid/**/*.graphql',
      ],
      preset: 'near-operation-file',
      presetConfig: { extension: '.stencil-component.tsx', folder: '__generated__', baseTypesPath: 'types.d.ts' },
      plugins: ['typescript-operations', 'typescript-stencil-apollo'],
      config: { componentType: 'class', globalNamespace: true },
    },
    './dev-test/githunt/types.vueApollo.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      plugins: ['typescript', 'typescript-operations', 'typescript-vue-apollo'],
    },
    './dev-test/githunt/types.vueApolloSmartOps.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      plugins: ['typescript', 'typescript-operations', 'typescript-vue-apollo-smart-ops'],
    },
    './dev-test/githunt/jit-sdk.ts': {
      schema: './dev-test/githunt/schema.json',
      documents: './dev-test/githunt/**/*.graphql',
      plugins: ['typescript', 'typescript-operations', 'typescript-jit-sdk'],
    },
    './dev-test/star-wars/types.ts': {
      schema: './dev-test/star-wars/schema.json',
      documents: './dev-test/star-wars/**/*.graphql',
      plugins: ['typescript', 'typescript-operations'],
    },
    './dev-test/star-wars/types.preResolveTypes.ts': {
      schema: './dev-test/star-wars/schema.json',
      documents: './dev-test/star-wars/**/*.graphql',
      config: { preResolveTypes: true },
      plugins: ['typescript', 'typescript-operations'],
    },
    './dev-test/star-wars/types.OnlyEnums.ts': {
      schema: './dev-test/star-wars/schema.json',
      documents: './dev-test/star-wars/**/*.graphql',
      config: { onlyEnums: true },
      plugins: ['typescript'],
    },
    './dev-test/star-wars/types.preResolveTypes.onlyOperationTypes.ts': {
      schema: './dev-test/star-wars/schema.json',
      documents: './dev-test/star-wars/**/*.graphql',
      config: { preResolveTypes: true, onlyOperationTypes: true },
      plugins: ['typescript', 'typescript-operations'],
    },
    './dev-test/test-schema/types.preResolveTypes.ts': {
      schema: './dev-test/test-schema/schema.graphql',
      documents: ['query test { testArr1 testArr2 testArr3 }'],
      config: { preResolveTypes: true },
      plugins: ['typescript', 'typescript-operations'],
    },
    './dev-test/test-schema/types.preResolveTypes.onlyOperationTypes.ts': {
      schema: './dev-test/test-schema/schema.graphql',
      documents: ['query test { testArr1 testArr2 testArr3 }'],
      config: { preResolveTypes: true, onlyOperationTypes: true },
      plugins: ['typescript', 'typescript-operations'],
    },
    './dev-test/star-wars/types.d.ts': {
      schema: './dev-test/star-wars/schema.json',
      config: { enumsAsTypes: true },
      plugins: ['typescript', 'typescript-operations'],
    },
    './dev-test/star-wars': {
      schema: './dev-test/star-wars/schema.json',
      documents: './dev-test/star-wars/**/*.graphql',
      preset: 'near-operation-file',
      presetConfig: { extension: '.tsx', folder: '__generated__', baseTypesPath: 'types.d.ts' },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
    },
    './dev-test/modules/': {
      schema: './dev-test/modules/*/types/*.graphql',
      preset: 'graphql-modules',
      presetConfig: { baseTypesPath: 'types.ts', filename: 'generated.ts' },
      plugins: ['typescript', 'typescript-resolvers'],
    },
    './dev-test/star-wars/types.globallyAvailable.d.ts': {
      schema: './dev-test/star-wars/schema.json',
      documents: './dev-test/star-wars/**/*.graphql',
      config: { enumsAsTypes: true, noExport: true },
      plugins: ['typescript', 'typescript-operations'],
    },
    './dev-test/star-wars/types.avoidOptionals.ts': {
      schema: './dev-test/star-wars/schema.json',
      documents: './dev-test/star-wars/**/*.graphql',
      config: { avoidOptionals: true },
      plugins: ['typescript', 'typescript-operations'],
    },
    './dev-test/star-wars/types.immutableTypes.ts': {
      schema: './dev-test/star-wars/schema.json',
      documents: './dev-test/star-wars/**/*.graphql',
      config: { immutableTypes: true },
      plugins: ['typescript', 'typescript-operations'],
    },
    './dev-test/star-wars/types.skipSchema.ts': {
      schema: './dev-test/star-wars/schema.json',
      documents: './dev-test/star-wars/**/*.graphql',
      plugins: ['typescript', 'typescript-operations'],
    },
    './dev-test/star-wars/types.refetchFn.tsx': {
      schema: './dev-test/star-wars/schema.json',
      documents: './dev-test/star-wars/**/*.graphql',
      plugins: ['typescript', 'typescript-react-apollo'],
      config: { withRefetchFn: true },
    },
    './dev-test/test-message/types.tsx': {
      schema: './dev-test/test-message/schema.graphql',
      documents: './dev-test/test-message/documents.ts',
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        documentMode: 'external',
        importDocumentNodeExternallyFrom: './documents.ts',
        reactApolloVersion: 3,
        gqlImport: 'graphql-tag',
        hooksImportFrom: '@apollo/react-hooks',
        withMutationFn: false,
      },
    },
    './dev-test/gql-tag-operations/gql': {
      schema: './dev-test/gql-tag-operations/schema.graphql',
      documents: './dev-test/gql-tag-operations/src/**/*.ts',
      preset: 'gql-tag-operations-preset',
      plugins: [],
    },
    './dev-test/gql-tag-operations/graphql': {
      schema: './dev-test/gql-tag-operations/schema.graphql',
      documents: './dev-test/gql-tag-operations/src/**/*.ts',
      preset: 'client',
      plugins: [],
    },
    './dev-test/gql-tag-operations-urql/gql': {
      schema: './dev-test/gql-tag-operations-urql/schema.graphql',
      documents: './dev-test/gql-tag-operations-urql/src/**/*.ts',
      preset: 'gql-tag-operations-preset',
      presetConfig: { augmentedModuleName: '@urql/core' },
      plugins: [],
    },
    './dev-test/gql-tag-operations-masking/gql': {
      schema: './dev-test/gql-tag-operations-masking/schema.graphql',
      documents: './dev-test/gql-tag-operations-masking/src/**/*.tsx',
      preset: 'gql-tag-operations-preset',
      presetConfig: { fragmentMasking: true },
      plugins: [],
    },
    './dev-test/gql-tag-operations-masking-star-wars/gql': {
      schema: './dev-test/gql-tag-operations-masking-star-wars/schema.json',
      documents: './dev-test/gql-tag-operations-masking-star-wars/src/**/*.tsx',
      preset: 'gql-tag-operations-preset',
      presetConfig: { fragmentMasking: true },
      plugins: [],
    },
  },
};

export default config;