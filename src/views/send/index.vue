<template>
  <div class="dflex vertical">
    <el-row style="margin: 20px;" :gutter="30">
      <el-col :span="8">
        <h3>1. 選擇發送對象用戶標籤</h3>
        <div class="dflex vertical">
          <el-select v-model="tags" multiple placeholder="請選擇標籤">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <div style="display:flex;">
                <span>{{ item.label }}</span>
                <span style="flex:1;text-align:right;">{{ item.people }}人</span>
              </div>
            </el-option>
          </el-select>
          <div style="margin-top:10px;">
            <div>
              <el-radio v-model="radio" label="1">符合任一標籤</el-radio>
              <el-radio v-model="radio" label="2">不符合任何標籤</el-radio>
            </div>
            <div style="margin-top:5px;">
              <el-radio v-model="radio" label="3">符合所有標籤</el-radio>
              <el-radio v-model="radio" label="4">不符合所有標籤</el-radio>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <h3>2. 選擇訊息類型</h3>
        <el-select v-model="value" placeholder="请选择" style="width:100%;">
          <el-option label="非促銷型訂閱訊息" value="b" />
        </el-select>
        <p style="font-size:13px;color:#606266">根據Messenger平台得訂閱訊息政策，傳送屬於新聞時事、生產力和個人追蹤類別的非促銷訊息。您可以在「粉絲專頁設定」>「Ｍessenger平台」下申請使用這個標籤。</p>
      </el-col>
      <el-col :span="8">
        <h3>3. 設定推送時間</h3>
        <div style="margin-top:10px;">
          <el-radio v-model="radio2" label="1">現在直接推播</el-radio>
        </div>
        <div style="margin-top:10px;">
          <el-radio v-model="radio2" label="2">排程推播</el-radio>
          <div class="dflex" style="margin-top:15px;">
            <el-date-picker
              v-model="date"
              type="date"
              placeholder="選擇日期"
            />
            <el-time-select
              v-model="time"
              style="margin-left:10px;"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
              }"
              placeholder="选择时间"
            />
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin: 20px;" :gutter="30">
      <el-col :span="8">
        <h3>4. 選擇訊息類別或模組</h3>
        <el-select v-model="value" placeholder="请选择" style="width:100%;">
          <el-option label="折價券" value="a" />
          <el-option label="文字" value="b" />
        </el-select>
        <el-input
          v-model="textarea"
          style="margin-top:10px"
          type="textarea"
          :rows="3"
          placeholder="請輸入内容"
        />
      </el-col>
    </el-row>
    <el-row id="result">
      <el-col :span="24">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <div style="padding: 14px;">
            <div class="dflex">
              <div style="flex:1; color:#4a4a4a;line-height: 35px;"><b>預計發送給17名用戶</b></div>
              <div class="dflex" style="justify-content: flex-end;">
                <el-button>測試訊息</el-button>
                <el-button type="primary">發送訊息</el-button>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: '选项0',
          label: '卡池不多',
          people: 6
        },
        {
          value: '选项1',
          label: '香港玩家',
          people: 8
        }, {
          value: '选项2',
          label: '台灣玩家',
          people: 10
        }, {
          value: '选项3',
          label: '入塔新手',
          people: 3
        }, {
          value: '选项4',
          label: '回鍋玩家',
          people: 15
        }, {
          value: '选项5',
          label: '高頻率互動',
          people: 2
        }
      ],
      options: [
        {
          value: '选项0',
          label: '森林之心',
          people: 6
        },
        {
          value: '选项1',
          label: '霸王',
          people: 8
        }, {
          value: '选项2',
          label: '無使用折價券',
          people: 10
        }, {
          value: '选项3',
          label: '入塔新手',
          people: 3
        }, {
          value: '选项4',
          label: '回鍋玩家',
          people: 15
        }, {
          value: '选项5',
          label: '高頻率互動',
          people: 2
        }
      ],
      tags: [],
      radio: '1',
      value: 'a',
      radio2: '1',
      date: '2020-02-05',
      time: '18:30',
      textarea: `異世客推出新遊戲「霸王」啦！
在2020/03/31之前來的朋友，享8折體驗價喔！
歡迎有興趣的朋友前來嚐鮮～`
    }
  }
}
</script>
<style lang="scss" scoped>
.dflex {
  display: flex;

  &.vertical {
    flex-direction: column
  }
}

#result {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
