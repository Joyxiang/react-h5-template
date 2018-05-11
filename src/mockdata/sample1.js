const data = {
  type: 'flex-mid',
  style: {
    color: 'white',
    backgroundImage: `url('https://h5-images.oss-cn-shanghai.aliyuncs.com/xingshidu_h5/marketing/pages/xsd51/bg.png')`
  },
  components: [
    {
      type: 'Image',
      src:
        'https://h5-images.oss-cn-shanghai.aliyuncs.com/xingshidu_h5/marketing/pages/world_cup/goal/share.png',
      alt: 'text',
      style: {
        position: 'absolute',
        top: '0',
        right: '0'
      },
      id: '0'
    },
    {
      type: 'Image',
      src:
        'https://h5-images.oss-cn-shanghai.aliyuncs.com/xingshidu_h5/marketing/pages/world_cup/goal/share.png',
      alt: 'text',
      style: {
        position: 'absolute',
        bottom: '0',
        right: '0'
      },
      id: '1'
    },
    {
      type: 'Button',
      style: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100px',
        height: '30px',
        border: '1px solid white'
      },
      defaultImage: '',
      touchedImage: ''
    }
  ]
}
export { data }
