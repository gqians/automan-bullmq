import { composeBull } from 'graphql-compose-bullmq';
import { schemaComposer } from 'graphql-compose';
import { createBullConnection } from './connectRedis';

const { queryFields, mutationFields, subscriptionFields } = composeBull({
  schemaComposer,
  typePrefix: 'Prefix',
  jobDataTC: `type MyJobData { fieldA: String! fieldB: String}`,
  queue: {
    name: 'QueueName',
  },
  redis: createBullConnection('queue'),
});

schemaComposer.Query.addFields({
  ...queryFields,
});

schemaComposer.Mutation.addFields({
  ...mutationFields,
});

if (subscriptionFields) {
  schemaComposer.Subscription.addFields({
    ...subscriptionFields,
  });
}

export default schemaComposer.buildSchema();
