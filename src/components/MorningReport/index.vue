<template>
  <div class="fib_yszb">
    <div class="cen_er">
      <div class="fib_ti">
        <h3 class="tabs_con">油市早报</h3>
        <a href="javascript:;" class="more">更多 &gt;</a>
      </div>
      <div class="tab">
        <table
          width="100%"
          border="1"
          cellspacing="0"
          cellpadding="0"
          border-collapse="collapse"
        >
          <thead>
            <tr>
              <th>日期</th>
              <th>纽约</th>
              <th>布伦特</th>
              <th>欧佩克</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>11-22</td>
              <td>47.49</td>
              <td>48.9</td>
              <td>42.33</td>
            </tr>
            <tr>
              <td>11-21</td>
              <td>45.69</td>
              <td>46.86</td>
              <td>42.83</td>
            </tr>
            <tr>
              <td>11-18</td>
              <td>45.69</td>
              <td>46.86</td>
              <td>42.83</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 二列广告 -->
     <small-ban>
        <ul>
          <li>
            <img src="@/assets/images/wrap_ban01.jpg"/>
          </li>
          <li>
            <img src="@/assets/images/wrap_ban02.jpg"/>
          </li>
        </ul>
      </small-ban>
    </div>
  </div>
</template>

<script>
import SmallBan from '@/components/SmallBan';

export default {
  name: "MorningReport",
  components: {
    SmallBan
  },
  data() {
    return {
      disabled: false,
    };
  },
  methods: {
    clickHandler(e) {
      // alert("我点击了按钮");
      console.log(e, "我点击了按钮");
      this.disabled = true;
      setTimeout(() => {
        this.disabled = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.fib_ti {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  margin-bottom: 0.3rem;
  border-bottom: 1px solid #ccc;
  h3 {
    height: 0.8rem;
    font-size: 0.3rem;
    color: #015cc8;
  }
  .more {
    display: block;
    width: 1rem;
    height: 0.8rem;
    font-size: 0.26rem;
  }
}
.tab {
  table {
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    th,
    td {
      width: 25%;
      padding: 0.1rem;
      height: 0.5rem;
      text-align: center;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>