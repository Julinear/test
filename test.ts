static mergeStyle() {
  return `<style>
  
    </style>`;
}

// 处理事件监听收到的数据
static async handleOutlookEvent(eventMeeting: { created: Meeting[], updated: Meeting[], deleted: string[] }) {
  if (eventMeeting.created) {
    await Promise.all(eventMeeting.created.map(async item => await this.createTask(this.assembleTask(item))));
  }
}
