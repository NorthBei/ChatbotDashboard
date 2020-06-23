<template>
  <el-row id="message-panels">
    <el-col :span="6" class="panel border-right">
      <el-row id="filter" class="pa-10 border-bottom ma-0" :gutter="10">
        <el-col :span="12" class="d-flex center">
          <i class="el-icon-folder text-center mr-10" />
          <el-select v-model="optionValue" placeholder="請選擇" class="grow">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
        <el-col :span="12" class="d-flex center">
          <i class="el-icon-user text-center mr-10" />
          <el-select v-model="personValue" placeholder="請選擇指派" class="grow">
            <el-option
              v-for="item in person"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
      </el-row>
      <el-row id="messages">
        <el-col v-for="(talk, index) in talks" :key="index" :span="24" class="message border-bottom">
          <el-row class="d-flex">
            <el-col :span="6" class="d-flex center">
              <img :src="talk.img" class="img">
            </el-col>
            <el-col :span="12">
              <div class="user-name title">{{ talk.name }}</div>
              <div class="msg subtitle">{{ talk.msg }}</div>
            </el-col>
            <el-col :span="8">
              <div class="time subtitle text-right d-flex">
                <i class="el-icon-time" /><span class="grow">{{ talk.time }}</span>
              </div>
              <div class="reply-name subtitle text-right d-flex">
                <i class="el-icon-user" /><span class="grow">{{ talk.replyer }}</span>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="10" class="panel border-right">
      <el-container id="talk-panel">
        <el-header height="57px" class="border-bottom pa-10">
          <el-row class="d-flex align-center">
            <el-col :span="6">
              <el-select v-model="personValue" placeholder="請選擇指派" width="60px">
                <el-option
                  v-for="item in person"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-col>
            <el-col :span="12" class="text-center"><b>{{ talks[0].name }}</b></el-col>
            <el-col :span="6" class="text-right">
              <!-- <el-switch
                :v-model="true"
                active-text="顯示機器人訊息"
                inactive-text="按年付费">
              </el-switch> -->
              <el-button icon="el-icon-star-off" circle />
              <el-button icon="el-icon-more" circle />
            </el-col>
          </el-row>
        </el-header>
        <el-main class="border-bottom" />
        <el-footer height="100px" class="pa-10">
          <el-input
            v-model="input"
            class="mb-10"
            placeholder="說說什麼吧"
            clearable
          />
          <div class="d-flex space-between align-center">
            <span class="icon-buttons">
              <i class="el-icon-basketball" />
              <i class="el-icon-picture-outline" />
              <i class="el-icon-video-play" />
              <i class="el-icon-microphone" />
            </span>
            <el-button type="primary" round>傳送</el-button>
          </div>
        </el-footer>
      </el-container>
    </el-col>
    <el-col :span="8">
      <el-container>
        <el-header height="57px" class="border-bottom pa-10">
          <el-row class="d-flex align-center" style="height: 100%;">
            <el-col :span="24" class="text-center">{{ talks[0].name }}</el-col>
          </el-row>
        </el-header>
        <el-main id="user" class="border-bottom">
          <el-row>
            <el-col :span="6">
              <img :src="talks[0].img" alt="" class="img">
            </el-col>
            <el-col :span="18">
              <div class="info"><span class="subtitle">用戶識別碼：</span>JOw12oieW2JwqWWAZ3</div>
              <div class="info"><span class="subtitle">性別：</span>男</div>
              <div class="info"><span class="subtitle">初次使用：</span>2019/08/20</div>
              <div class="info"><span class="subtitle">最近互動：</span>2019/12/02</div>
            </el-col>
          </el-row>
        </el-main>
        <el-main class="border-bottom">
          <div class="mb-10">用戶欄位</div>
          <el-row class="d-flex center">
            <el-col :span="8">
              <span class="subtitle">UID</span>
            </el-col>
            <el-col :span="16">
              <el-input v-model="uid" placeholder="請输入内容" />
            </el-col>
          </el-row>
          <div class="text-right mt-10">
            <el-button icon="el-icon-circle-plus-outline">新增欄位</el-button>
          </div>
        </el-main>
        <el-main class="border-bottom">
          <div class="mb-10">用戶標籤</div>
          <el-tag
            v-for="tag in dynamicTags"
            :key="tag"
            class="mr-10"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >
            {{ tag }}
          </el-tag>
          <el-input
            v-if="inputVisible"
            ref="saveTagInput"
            v-model="inputValue"
            class="input-new-tag"
            size="medium"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          />
          <el-button v-else class="button-new-tag" size="small" icon="el-icon-circle-plus-outline" @click="showInput">New Tag</el-button>
        </el-main>
        <el-main class="border-bottom">
          <div class="mb-10">備註</div>
          <el-input
            v-model="textarea"
            type="textarea"
            :rows="2"
            placeholder="請輸入備註內容"
          />
        </el-main>
      </el-container>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data: () => ({
    options: [
      {
        value: 'A',
        label: '主要資料夾'
      }, {
        value: 'B',
        label: '已完成'
      }, {
        value: 'C',
        label: '未讀訊息'
      }, {
        value: 'D',
        label: '垃圾訊息'
      }, {
        value: 'E',
        label: '持續追蹤'
      }
    ],
    optionValue: 'A',
    person: [
      {
        value: 'Z',
        label: '所有指派'
      }, {
        value: 'A',
        label: '客服A'
      }, {
        value: 'B',
        label: '客服B'
      }, {
        value: 'C',
        label: '客服C'
      }, {
        value: 'D',
        label: '客服D'
      }
    ],
    personValue: 'Z',
    talks: [
      {
        name: '趙易',
        img: 'data:image/jpeg;base64,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',
        msg: '你: 嗨 ~ 等等喔^^ 幫...',
        replyer: '客服B',
        time: '3 min'
      },
      {
        name: '許天燮',
        img: 'https://tw.blog.voicetube.com/wp-content/uploads/2015/01/10590623_4692925977144_7023067138006288189_n.jpg',
        msg: '你: 好的，沒問題，感...',
        replyer: '客服A',
        time: '1 day'
      },
      {
        name: '陳冠皇',
        img: 'https://i.imgur.com/GLwgYL4.jpg',
        msg: '你: 好的，我了解了，...',
        replyer: '客服C',
        time: '2019/11/30'
      },
      {
        name: '陳品鐸',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPf3Qgr5V-TXYTo3d17J98Z_OIY6cshF_omNvq-QlN7nHkCfZ2&usqp=CAU',
        msg: '陳品鐸: OK謝謝',
        replyer: '客服C',
        time: '2019/11/30'
      }
    ],
    input: '',
    dynamicTags: ['回鍋玩家', '台灣玩家', '卡池不多'],
    inputVisible: false,
    inputValue: '',
    textarea: '',
    uid: '789117536'
  }),
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },
    showInput() {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm() {
      const inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>
<style lang="scss" scoped>

.d-flex {
  display: flex;

  &.align-center {
    align-items: center;
  }

  &.center {
    justify-content: center;
    align-items: center;
  }

  &.vertical {
    flex-direction: column;
  }

  &.space-between {
    justify-content: space-between;
  }

  &.space-around {
    justify-content: space-around;
  }

  .grow {
    flex: 1;
  }
}

.text-center {
  text-align: center
}

.text-left {
  text-align: left
}

.text-right {
  text-align: right
}

.title {
  font-size: 16px;
  color: #4a4a4a;
}

.subtitle {
  font-size: 14px;
  color: #4a4a4a;
}

.pa-10 {
  padding: 10px;
}

.ma-0 {
  margin: 0 !important;
}
.mt-10 {
  margin-top: 10px;
}
.mr-10 {
  margin-right: 10px;
}
.mb-10 {
  margin-bottom: 10px;
}

.border-right {
  border-right: 1px solid rgba(0, 0, 0, .1);
}
.border-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, .1);
}

#message-panels {
  min-height: inherit;
  margin: 0 !important;

  .panel {
    min-height: inherit;
  }

  .message {
    padding: 15px;
    padding-left: 0;

    .img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }

    .user-name,
    .reply-name,
    .msg,
    .reply-name > i,
    .time,
    .time > i {
      line-height: 25px;
    }

    .msg {
      color: #999999;
    }

    &:first-of-type {
      background: #f2f2f2;
    }
  }
}

#talk-panel {
  min-height: inherit;

  .icon-buttons {
    font-size: 28px;
    color: #696969;
  }
}

#user {
  .img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }

  .info {
    line-height: 20px;
  }
}
</style>
