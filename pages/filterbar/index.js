import { $wuxFilterBar } from '../../components/wuxfilterbar'


Page({
  data: {
    items: [
      {
        type: 'filter',
        label: '筛选',
        value: 'filter',
        children: [
          {
            type: 'checkbox',
            label: 'Query（复选）',
            value: 'query',
            children: [{
              label: '运动',
              value: '1',
            },
            {
              label: '游戏',
              value: '2',
            },
            {
              label: '交友',
              value: '3',
            },
            {
              label: '旅行',
              value: '4',
            },
            {
              label: '读书',
              value: '5',
            },
            {
              label: '竞赛',
              value: '6',
            },
            {
              label: '电影',
              value: '7',
            },
            {
              label: '音乐',
              value: '8',
            },
            {
              label: '其他',
              value: '9',
            },
            ],
          }
        ],
        groups: ['001', '002', '003'],//判断元素是否同组
      },
    ],
  },
  // 这里结束data数据参数设置


  onLoad() {
    this.$wuxFilterBar = $wuxFilterBar.init({
      items: this.data.items,
      onChange: (checkedItems, items) => {
        console.log(this, checkedItems, items)
        const params = {}
        checkedItems.forEach((n) => {
          if (n.value === 'filter') {
            console.log("选中的标题内容为：" + n.value);
            n.children.filter((n) => n.selected).forEach((n) => {
              if (n.value === 'query') {
                console.log("选中的具体内容为：" + n.value);

                const selected = n.children.filter((n) => n.checked).map((n) => n.value).join(' ')
                params.query = selected;
                var arr = params.query;
                var newarr = arr.split(" ");
                console.log(typeof params.query);
                console.log("最终选中的内容为：" + newarr);
              }
            })
          }
        })
      },
    })


    
  },






})


