import { gql } from '@apollo/client';

const TODO_SUBSCRIPTION = gql`
  subscription onTodoAdded() {
    todoAdded() {
      id
      type
    }
  }
`;
