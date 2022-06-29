import { Knex } from 'knex';
import { StartedTestContainer } from 'testcontainers';
import { BlockWith, TestWith, use } from './withFixture';
import withPostgresContainer from './withPostgresContainer';
import withSchema from './withSchema';
import withTestKnex from './withTestKnex';

const withInfra = (
  test: TestWith<{}>,
  block: BlockWith<{ container: StartedTestContainer; db: Knex }>
) => {
  withPostgresContainer(test, (test) => {
    withTestKnex(test, (test) => {
      use(test, () => ({}), block);
    });
  });
};

export default withInfra;
