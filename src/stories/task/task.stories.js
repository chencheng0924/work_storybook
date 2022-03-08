import { action } from "@storybook/addon-actions"
import Task from "./task"

export default {
  title: "Task",
  excludeStories: /.*Data$/
};

export const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask")
};

export const taskData = {
  id: "1",
  title: "test_task",
  state: "task_inbox",
  updated_at: new Date()
}

const taskTemplate = `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`

export const Default = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => taskData
    }
  },
  methods: actionsData
})

// pinned task state
export const Pinned = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => ({
        ...taskData,
        state: "TASK_PINNED"
      })
    }
  },
  methods: actionsData
});
// archived task state
export const Archived = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => ({
        ...taskData,
        state: "TASK_ARCHIVED"
      })
    }
  },
  methods: actionsData
});