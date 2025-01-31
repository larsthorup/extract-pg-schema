<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [extract-pg-schema](./extract-pg-schema.md) &gt; [ExtractSchemaOptions](./extract-pg-schema.extractschemaoptions.md) &gt; [resolveViews](./extract-pg-schema.extractschemaoptions.resolveviews.md)

## ExtractSchemaOptions.resolveViews property

extractShemas will always attempt to parse view definitions to discover the "source" of each column, i.e. the table or view that it is derived from. If this option is set to `true`<!-- -->, it will attempt to follow this source and copy values like indices, isNullable, etc. so that the view data is closer to what the database reflects.

<b>Signature:</b>

```typescript
resolveViews?: boolean;
```
