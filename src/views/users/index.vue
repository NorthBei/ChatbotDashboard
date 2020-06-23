<template>
  <div id="table-wrapper">
    <el-row id="filter">
      <el-col :span="1" class="filter-items" />
      <el-col :span="5" class="filter-items">
        <span class="font">關鍵字：</span>
        <el-input
          v-model="input"
          placeholder="姓名/用戶欄位"
          clearable
        />
      </el-col>
      <el-col :span="6" class="filter-items">
        <span class="font">互動區間：</span>
        <el-date-picker
          v-model="dates"
          type="daterange"
          start-placeholder="開始日期"
          end-placeholder="結束日期"
          :default-time="['00:00:00', '23:59:59']"
        />
      </el-col>
      <el-col :span="6" class="filter-items">
        <span class="font">標籤：</span>
        <el-select v-model="tags" multiple collapse-tags placeholder="請選擇標籤">
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
      </el-col>
      <el-col :span="5" class="filter-items" style="justify-content: flex-end;">
        <el-button type="primary">匯出用戶資料</el-button>
      </el-col>
      <el-col :span="1" class="filter-items" />
    </el-row>
    <el-table
      id="users"
      ref="multipleTable"
      :data="users"
      tooltip-effect="dark"
      stripe
    >
      <el-table-column
        type="selection"
        width="60"
      />
      <el-table-column
        label="頭貼"
        width="100"
      >
        <template slot-scope="scope"><img :src="scope.row.img" alt="" class="img"></template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120"
      />
      <el-table-column
        prop="gender"
        label="性別"
        width="100"
      />
      <el-table-column
        prop="firstActive"
        label="初次使用"
        width="150"
      />
      <el-table-column
        prop="lastActive"
        label="最近互動"
        width="150"
      />
      <el-table-column
        prop="tags"
        label="標籤"
        width="auto"
      >
        <template slot-scope="scope">
          <el-tag
            v-for="tag in scope.row.tags"
            :key="tag"
            class="tag"
          >
            {{ tag }}
          </el-tag>
        </template>
      </el-table-column>
      <!-- <el-table-column
        prop="lastActive"
        label="機器人狀態"
        width="200">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.isBoting"
            active-text="客服"
            inactive-text="Bot">
          </el-switch>
        </template>
      </el-table-column> -->
      <el-table-column label="操作" width="100">
        <template>
          <el-button
            type="primary"
            icon="el-icon-edit"
            circle
            @click="dialog = true"
          />
        </template>
      </el-table-column>
    </el-table>
    <div id="pages">
      <el-pagination
        layout="total, prev, pager, next"
        page-size="5"
        :total="24"
      />
    </div>
    <el-dialog id="user-detial" title="詳細資訊" :visible.sync="dialog" width="45%">
      <el-row>
        <el-col :span="11" :push="1" style="border-right: 1px solid #dedcdc;">
          <div class="d-flex vertical center">
            <img :src="users[0].img" alt="" class="img">
            <div class="name">{{ users[0].name }}</div>
          </div>
          <p class="title">用戶資訊：</p>
          <div class="items"><span class="key">用戶識別碼：</span><span>JOw12oieW2JwqWWAZ3</span></div>
          <div class="items"><span class="key">性別：</span><span>{{ users[0].gender }}</span></div>
          <div class="items"><span class="key">初次使用：</span><span>{{ users[0].firstActive }}</span></div>
          <div class="items"><span class="key">最近互動：</span><span>{{ users[0].lastActive }}</span></div>
        </el-col>
        <el-col :span="10" :push="2">
          <div>
            <p class="title">用戶欄位：</p>
            <!-- <div class="items"><span class="key">UID：</span><span>789117536</span></div> -->
            <div class="items"><span class="key">生日</span><span>10/19</span></div>
          </div>
          <div style="margin-top:40px;">
            <p class="title">用戶標籤：</p>
            <div>
              <el-tag
                v-for="(tag, index) in users[0].tags"
                :key="index"
                style="margin-right:10px;margin-bottom:10px;"
              >
                {{ tag }}
              </el-tag>
            </div>
          </div>
          <div style="margin-top:40px;">
            <p class="title">備註：</p>
            <el-input
              v-model="textarea"
              type="textarea"
              placeholder="請輸入備註內容"
            /></div>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      dates: '',
      multipleSelection: [],
      users: [
        {
          name: '趙易',
          gender: '男',
          img: 'data:image/jpeg;base64,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',
          msg: '你: 沒有問題喔，謝謝...',
          replyer: '客服B',
          time: '3 min',
          lastActive: '2019/12/15',
          firstActive: '2019/08/20',
          isBoting: true,
          // tags: ['回鍋玩家', '台灣玩家', '卡池不多'],
          tags: ['森林之心', '台中市', '2019-12-15', '洞察遊戲', '8人', 'GID:35e32b', '客單價:325', '3星']
        },
        {
          name: '許天燮',
          gender: '男',
          img: 'https://tw.blog.voicetube.com/wp-content/uploads/2015/01/10590623_4692925977144_7023067138006288189_n.jpg',
          msg: '你: 好的，沒問題，感...',
          replyer: '客服A',
          time: '1 day',
          firstActive: '2019/08/05',
          lastActive: '2019/12/15',
          isBoting: false,
          // tags: ['回鍋玩家', '香港玩家', '高頻率互動'],
          tags: ['森林之心', '台中市', '2019-12-15', '洞察遊戲', '8人', 'GID:35e32b', '客單價:325', '3星']
        },
        {
          name: '陳冠皇',
          gender: '男',
          img: 'https://i.imgur.com/GLwgYL4.jpg',
          msg: '你: 好的，我了解了，...',
          replyer: '客服C',
          time: '2019/11/30',
          firstActive: '2019/08/02',
          lastActive: '2019/11/30',
          isBoting: false,
          // tags: ['入塔新手', '香港玩家'],
          tags: ['霸王', '台中市', '2019-11-30', '洞察遊戲', '5人', 'GID:Az0e32p', '客單價:349', '3星']
        },
        {
          name: '陳品鐸',
          gender: '男',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPf3Qgr5V-TXYTo3d17J98Z_OIY6cshF_omNvq-QlN7nHkCfZ2&usqp=CAU',
          msg: '陳品鐸: OK謝謝',
          replyer: '客服C',
          time: '2019/11/30',
          firstActive: '2019/07/22',
          lastActive: '2019/11/30',
          isBoting: false,
          // tags: ['卡池不多', '香港玩家']
          tags: ['霸王', '台中市', '2019-11-30', '洞察遊戲', '5人', 'GID:Az0e32p', '客單價:349', '3星']
        },
        {
          name: '蘇樣',
          gender: '男',
          img: 'https://static-exp1.licdn.com/sc/p/com.linkedin.jobs-guest-frontend%3Ajobs-guest-frontend-static-content%2B0.0.2724/f/%2Fjobs-guest-frontend%2Fimages%2Fcommon%2Fpeople%2Fuser18.jpg',
          msg: '陳品鐸: OK謝謝',
          replyer: '客服B',
          time: '2019/11/30',
          firstActive: '2019/07/22',
          lastActive: '2019/11/30',
          isBoting: false,
          // tags: ['台灣玩家']
          tags: ['霸王', '台中市', '2019-11-30', '洞察遊戲', '5人', 'GID:Az0e32p', '客單價:349', '3星']
        }
      ],
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
      tags: []
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

.font {
  font-size: 15px;
  color: #4a4a4a;
}

.mr-10 {
  margin-right: 10px
}

#table-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#filter {
  margin: 20px 0;
  display: inline-flex;
  align-items: center;
  width: 100%;

  .filter-items {
    display: flex;
    white-space: nowrap;
    margin: 0 10px;
    align-items: center;
  }
}

#users {
  .img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  .tag {
    margin-right: 8px;
    margin-bottom: 8px;
  }
}

#pages {
  margin-top: 20px;
}

#user-detial {
  .img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
  }

  .name {
    font-size: 18px;
    color: #4a4a4a;
    font-weight: bold;
    margin: 20px 0;
  }

  .title {
    color: #4a4a4a;
    font-weight: bold;
    margin-bottom: 25px;
  }

  .items {
    width: 100%;
    margin-bottom: 15px;

    .key {
      width: 90px;
      display: inline-block;
    }
  }
}
</style>
