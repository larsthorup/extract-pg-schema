import { Knex } from 'knex';
import { StartedTestContainer } from 'testcontainers';

import { BlockWith, TestWith, use } from './withFixture';

const withSchema = (
  test: TestWith<{ container: StartedTestContainer; db: Knex }>,
  schemaName: string,
  block: BlockWith<{ container: StartedTestContainer; db: Knex }>
) => {
  test.describe(withSchema.name, () => {
    test.beforeEach(async ({ db }) => {
      await db.schema.createSchemaIfNotExists(schemaName);
    });
    test.afterEach(async ({ db }) => {
      await db.schema.dropSchemaIfExists(schemaName, true);
    });
    use(test, () => ({}), block);
  });
};

export default withSchema;
