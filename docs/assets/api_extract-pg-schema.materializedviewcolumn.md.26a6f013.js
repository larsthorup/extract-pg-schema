import{_ as t,c as e,o as a,a as r}from"./app.fae77951.js";const f=JSON.parse('{"title":"MaterializedViewColumn interface","description":"","frontmatter":{},"headers":[{"level":2,"title":"MaterializedViewColumn interface","slug":"materializedviewcolumn-interface"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"api/extract-pg-schema.materializedviewcolumn.md"}'),i={name:"api/extract-pg-schema.materializedviewcolumn.md"},d=r(`<p><a href="./">Home</a> &gt; <a href="./extract-pg-schema.html">extract-pg-schema</a> &gt; <a href="./extract-pg-schema.materializedviewcolumn.html">MaterializedViewColumn</a></p><h2 id="materializedviewcolumn-interface" tabindex="-1">MaterializedViewColumn interface <a class="header-anchor" href="#materializedviewcolumn-interface" aria-hidden="true">#</a></h2><p><b>Signature:</b></p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MaterializedViewColumn</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>Property</th><th>Modifiers</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><a href="./extract-pg-schema.materializedviewcolumn.comment.html">comment</a></td><td></td><td>string | null</td><td></td></tr><tr><td><a href="./extract-pg-schema.materializedviewcolumn.defaultvalue.html">defaultValue</a></td><td></td><td>any</td><td></td></tr><tr><td><a href="./extract-pg-schema.materializedviewcolumn.expandedtype.html">expandedType</a></td><td></td><td>string</td><td></td></tr><tr><td><a href="./extract-pg-schema.materializedviewcolumn.fakeinformationschemavalue.html">fakeInformationSchemaValue</a></td><td></td><td>InformationSchemaColumn</td><td>The Postgres information_schema views do not contain info about materialized views. This value is the result of a query that matches the one for regular views. Use with caution, not all fields are guaranteed to be meaningful and/or accurate.</td></tr><tr><td><a href="./extract-pg-schema.materializedviewcolumn.generated.html">generated</a></td><td></td><td>&#39;ALWAYS&#39; | &#39;NEVER&#39; | &#39;BY DEFAULT&#39;</td><td></td></tr><tr><td><a href="./extract-pg-schema.materializedviewcolumn.indices.html">indices?</a></td><td></td><td><a href="./extract-pg-schema.index.html">Index</a>[]</td><td><i>(Optional)</i></td></tr><tr><td><a href="./extract-pg-schema.materializedviewcolumn.isarray.html">isArray</a></td><td></td><td>boolean</td><td></td></tr><tr><td><a href="./extract-pg-schema.materializedviewcolumn.isidentity.html">isIdentity</a></td><td></td><td>boolean</td><td></td></tr><tr><td><a href="./extract-pg-schema.materializedviewcolumn.isnullable.html">isNullable?</a></td><td></td><td>boolean</td><td><i>(Optional)</i></td></tr><tr><td><a href="./extract-pg-schema.materializedviewcolumn.isprimarykey.html">isPrimaryKey?</a></td><td></td><td>boolean</td><td><i>(Optional)</i></td></tr><tr><td><a href="./extract-pg-schema.materializedviewcolumn.isupdatable.html">isUpdatable</a></td><td></td><td>boolean</td><td></td></tr><tr><td><a href="./extract-pg-schema.materializedviewcolumn.maxlength.html">maxLength</a></td><td></td><td>number | null</td><td></td></tr><tr><td><a href="./extract-pg-schema.materializedviewcolumn.name.html">name</a></td><td></td><td>string</td><td></td></tr><tr><td><a href="./extract-pg-schema.materializedviewcolumn.ordinalposition.html">ordinalPosition</a></td><td></td><td>number</td><td></td></tr><tr><td><a href="./extract-pg-schema.materializedviewcolumn.reference.html">reference?</a></td><td></td><td><a href="./extract-pg-schema.columnreference.html">ColumnReference</a> | null</td><td><i>(Optional)</i> If views are resolved, this will contain the reference from the source column in the table that this view references. Note that if the source is another view, that view in turn will be resolved if possible, leading us to a table in the end.</td></tr><tr><td><a href="./extract-pg-schema.materializedviewcolumn.source.html">source?</a></td><td></td><td>{ schema: string; table: string; column: string; }</td><td><i>(Optional)</i> This will contain a &quot;link&quot; to the source table or view and column, if it can be determined.</td></tr><tr><td><a href="./extract-pg-schema.materializedviewcolumn.type.html">type</a></td><td></td><td><a href="./extract-pg-schema.materializedviewcolumntype.html">MaterializedViewColumnType</a></td><td></td></tr></tbody></table>`,6),l=[d];function n(c,o,m,s,h,p){return a(),e("div",null,l)}var g=t(i,[["render",n]]);export{f as __pageData,g as default};
