<template>
  <div class="layout">
    <el-container class="layout-container" style="border: 1px solid #eee">
      <el-aside :width="asideWidth" style="background-color: #f7f7f7">
        <el-menu
          router
          :default-openeds="list"
          unique-opened
          :default-active="$route.path"
          :collapse="isCollapse"
          collapse-transition
        >
          <div class="changeBtnGroup">
            <el-radio-group v-model="isCollapse" style="margin: 10px 0px">
              <el-radio-button :label="false">展开</el-radio-button>
              <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
          </div>
          <!-- <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-grid"></i>
              <span>首页</span>
            </template>
            <el-menu-item-group>
              <template slot="title">首页内容</template>
            </el-menu-item-group>
          </el-submenu> -->

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-date"></i>
              <span>内容管理</span>
            </template>

            <el-menu-item-group>
              <template slot="title">标签</template>
              <el-menu-item index="/article/articleTag">标签管理</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group>
              <template slot="title">文章</template>
              <el-menu-item index="/article/articleAdd">新建文章</el-menu-item>
              <el-menu-item index="/article/articleList">文章列表</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group>
              <template slot="title">时间线</template>
              <el-menu-item index="/timeLine/timeLineList">时间线</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>友链管理</span>
            </template>

            <el-menu-item-group>
              <template slot="title">链接</template>
              <el-menu-item index="/link/friendLink">友情链接</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">管理员</template>
              <el-menu-item index="/system/adminList">管理员列表</el-menu-item>
              <el-menu-item index="/system/sourceList">系统资源</el-menu-item>
              <el-menu-item index="/system/aboutMe">关于我</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container class="el-container" style="width: 100%">
        <el-header
          style="font-size: 12px; display: flex; justify-content: space-between"
        >
          <music-box class="music-box"></music-box>
          <el-dropdown @command="handleCommand">
            <div class="info">
              <span style="color: white">{{ account }}</span>
              <el-avatar
                shape="square"
                size="small"
                src="http://img.xujinfeng.top/image/16059263951119685kbck63i.jpg"
                class="avatar"
              ></el-avatar>
              <i class="el-icon-setting" style="margin-left: 5px"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="homepage">首页</el-dropdown-item>
              <el-dropdown-item :divided="true" command="logout"
                >退出</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>

        <el-main>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
          <keep-alive max="6">
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MusicBox from "@/components/MusicBox.vue";
export default {
  name: "Layout",
  data() {
    return {
      list: ["0"],
      account: "",
      isCollapse: false,
      info: {},
    };
  },
  created() {
    this.info = JSON.parse(sessionStorage.getItem("info"));
    this.initInfo();
  },
  computed: {
    asideWidth() {
      return this.isCollapse ? "70px" : "200px";
    },
  },
  methods: {
    initInfo() {
      this.account = this.info
        ? this.info.login
        : sessionStorage.getItem("account");
    },
    handleCommand(command) {
      switch (command) {
        case "homepage":
          this.$router.push("/home");
          break;
        case "logout":
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("account");
          sessionStorage.removeItem("info");

          window.location.replace(
            `${window.location.protocol}//${window.location.host}`
          );

          break;

        default:
          break;
      }
    },
  },
  components: {
    MusicBox,
  },
};
</script>

<style lang="scss">
@import "../assets/style/style.scss";
.layout {
  position: relative;
  .layout-container {
    height: 100vh;
    .changeBtnGroup {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  .el-header {
    position: relative;
    background-color: map-get($colors, "primary");
    .breadcrumb {
      position: absolute;
      bottom: 0px;
    }
  }
  .info {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding-right: 10px;
  }
}
</style>
