(function () {

    // diy类参数
    var options = {}

        // diy数据
        , diyData = {}

        // 编辑器新增元素默认数据
        // TODO: 即将废弃, 改为defaultData
        , addEditorItemData = {
            banner: {
                imgUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAPAAA/+EDKmh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QzczNTQyODg4QTIxMUU3QTI0MUVGRjA4MjJDOUQwOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QzczNTQyNzg4QTIxMUU3QTI0MUVGRjA4MjJDOUQwOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzUwQTEyMDc4MjY1MTFFNzlCRkM4MDNFNjkyODQwNDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzUwQTEyMDg4MjY1MTFFNzlCRkM4MDNFNjkyODQwNDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoM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cH2tnLy3Fd/as1tl1rMaTHy15p+BGmvDyfJvP7Q0qEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k4NTM0SFREcW5zUCsrbHJNdVFOdzluUDVnYi92L3N1VzVIenFiMTdXY2NKMUpSd0hYQQ==',
                imgName: '/images/default/banner-1.jpg',
                linkUrl: ''
            }
        }

        /**
         * 新增组件
         * @type {{}}
         */
        , defaultData = {
            search: {
                params: {'placeholder': '请输入关键字进行搜索'},
                style: {
                    textAlign: 'left',
                    searchStyle: ''
                }
            },
            banner: {
                style: {
                    btnColor: '#ffffff',
                    btnShape: 'round'
                },
                data: [
                    {
                        imgUrl: 'assets/store/img/diy/banner_01.jpg',
                        imgName: 'banner-1.jpg',
                        linkUrl: ''
                    },
                    {
                        imgUrl: 'assets/store/img/diy/banner_02.jpg',
                        imgName: 'banner-2.jpg',
                        linkUrl: ''
                    }
                ]
            }
        }

        /**
         * 私有方法
         */
        , method = {

            /**
             * 初始化类
             */
            init: {

                // 执行初始化
                execute: function () {
                    // 渲染已有diy数据
                    method.render.main();
                    // 初始化diy元素拖拽事件
                    this.diyItem.DDSort();
                    // 初始化diy元素选中事件
                    this.diyItem.selected();
                    // 初始化diy元素删除事件
                    this.diyItem.delete();
                    // 注册数据绑定
                    this.inputDataBind();
                    // 初始化工具栏事件
                    this.toolbar.execute();
                },

                /**
                 * diy元素事件类
                 */
                diyItem: {

                    /**
                     * 初始化拖拽事件
                     */
                    DDSort: function () {
                        var $phoneMain = $(options.phoneMain);
                        // diy元素拖拽
                        $phoneMain.DDSort({
                            target: '.drag',
                            delay: 50, // 延时处理，默认为 50 ms，防止手抖点击 A 链接无效
                            up: function () {
                                var newItems = {};
                                $phoneMain.find('.drag').each(function () {
                                    var itemId = $(this).data('itemid');
                                    newItems[itemId] = diyData.items[itemId]
                                });
                                diyData.items = newItems;
                            }
                        });
                    },

                    /**
                     * 初始化选中事件
                     */
                    selected: function () {
                        var $phoneMain = $(options.phoneMain);
                        $phoneMain.on('click', '.drag', function () {
                            var $drag = $(this);
                            if (!$drag.hasClass('selected')) {
                                // 设置选中
                                $phoneMain.children().removeClass('selected');
                                $drag.addClass('selected');
                                // 渲染编辑器
                                method.render.editor($drag.data('itemid'));
                            }
                        });
                    },

                    delete: function () {
                        var $phoneMain = $(options.phoneMain);
                        $phoneMain.on('click', '.btn-del', function () {
                            var $this = $(this);
                            layer.confirm('确定要删除吗？', function (index) {
                                var $item = $this.parent().parent()
                                    , $nextItem = $item.next()
                                    , itemId = $item.data('itemid');
                                method.diyData.deleteItem(itemId);
                                $item.remove();
                                $nextItem.trigger('click');
                                layer.close(index);
                            });
                        });
                    }

                },


                /**
                 * 注册数据绑定
                 */
                inputDataBind: function () {
                    // 绑定input修改事件
                    $(options.editor).on('propertychange change', 'input[data-bind]', function () {
                        var $this = $(this)
                            , val = $this.val()
                            , itemIndex = $this.data('bind').split('.')
                            , itemId = $this.parents('form').data('itemid');
                        // 数据绑定 (最多支持3级)
                        method.diyData.setData(itemId, itemIndex, val);
                        // 重新渲染diy元素
                        method.render.refreshDiyItem(itemId);
                    });
                },


                /**
                 * 工具栏事件
                 */
                toolbar: {
                    /**
                     * 工具栏元素
                     */
                    diyMenu: $('#diy-menu'),

                    /**
                     * 执行初始化事件
                     */
                    execute: function () {
                        // 返回顶部事件
                        this.backTop();
                        // 新增组件事件
                        this.components();
                        // 数据提交
                        this.submit();
                    },

                    /**
                     * 新增组件
                     */
                    components: function () {
                        this.diyMenu.find('#components .special').click(function () {
                            var type = $(this).data('type');
                            method.render.insertDiyItem(type);
                        });
                    },

                    /**
                     * 返回顶部
                     */
                    backTop: function () {
                        this.diyMenu.find('#back-top').click(function () {
                            $('html,body').animate({scrollTop: 0}, 100);
                        });
                    },

                    /**
                     * 保存数据到后端
                     */
                    submit: function () {
                        $('#submit').click(function () {
                            if ($.isEmptyObject(diyData.items)) {
                                layer.msg('至少存在一个组件', {anim: 6});
                                return false;
                            }
                            $.post('', {data: diyData}, function (result) {
                                result.code === 1 ? $.show_success(result.msg, result.url)
                                    : $.show_error(result.msg);
                            });
                        });
                    }

                }

            },

            /**
             * 编辑器类
             */
            editor: {
                // 添加元素类
                addItem: {

                    /**
                     * 添加banner
                     * @param itemId
                     * @param $items
                     */
                    banner: function (itemId, $items) {
                        var data = method.diyData.additemData(itemId, 'banner')
                            , $html = $(
                            '<div class="item" data-key="' + data.dataId + '">' +
                            '  <div class="container">' +
                            '    <div class="item-image"> <img src="' + data.imgUrl + '" alt=""> </div>' +
                            '    <div class="item-form am-form-file">' +
                            '        <div class="input-group">' +
                            '            <input type="text" name="imgName" data-bind="data.' + data.dataId + '.imgName"' +
                            '               value="' + data.imgName + '" placeholder="请选择图片" readonly>' +
                            '            <span class="input-group-addon">选择图片</span>' +
                            '            <input type="hidden" name="imgUrl" data-bind="data.' + data.dataId + '.imgUrl"' +
                            '                value="' + data.imgUrl + '">' +
                            '        </div>' +
                            '        <div class="input-group" style="margin-top:10px;">' +
                            '            <input type="text" name="linkUrl" data-bind="data.' + data.dataId + '.linkUrl"' +
                            '               value="" placeholder="请输入链接地址    例：page/index/index">' +
                            '        </div>' +
                            '    </div>' +
                            '  </div>' +
                            '  <i class="iconfont icon-shanchu item-delete"></i>' +
                            '</div>'
                        );
                        console.log('asd');
                        // 选择图片
                        method.editor.event.selectImages($html);
                        $items.append($html);
                    }

                },

                // 事件方法
                event: {

                    /**
                     * 事件注册
                     */
                    register: function ($form) {
                        // input单/多选框事件
                        this.input($form);
                        // 删除子元素事件
                        this.itemDelete($form);
                        // 添加子元素事件
                        this.itemAdd($form);
                        // 子元素拖拽事件
                        this.itemDDSort($form);
                        // 图片选择事件
                        this.selectImages($form);
                    },

                    /**
                     * 拖拽事件
                     * @param $form
                     */
                    itemDDSort: function ($form) {
                        $form.find('.form-items').DDSort({
                            target: '.item',
                            delay: 50, // 延时处理，默认为 50 ms，防止手抖点击 A 链接无效
                            up: function () {
                                var $formItems = $(this).parent()
                                    , newData = {}
                                    , itemId = $formItems.parent().data('itemid');
                                $formItems.find('.item').each(function () {
                                    var key = $(this).data('key');
                                    newData[key] = {
                                        imgName: diyData.items[itemId].data[key].imgName,
                                        imgUrl: diyData.items[itemId].data[key].imgUrl,
                                        linkUrl: diyData.items[itemId].data[key].linkUrl
                                    };
                                });
                                diyData.items[itemId].data = newData;
                                // 重新渲染diy元素
                                method.render.refreshDiyItem(itemId);
                            }
                        });
                    },

                    /**
                     * 单/多选框事件
                     * @param $html
                     */
                    input: function ($html) {
                        // 单/多选框
                        $html.find('input[type=checkbox], input[type=radio]').uCheck();
                    },

                    /**
                     * 删除子元素事件
                     * @param $html
                     */
                    itemDelete: function ($html) {
                        // 子元素删除事件
                        $html.on('click', '.item-delete', function () {
                            var $item = $(this).parent();
                            if ($html.find('.item-delete').length <= 1) {
                                layer.msg('至少保留一个', {anim: 6});
                                return false;
                            }
                            layer.confirm('您确定要删除吗？', {
                                title: '友情提示'
                            }, function (index) {
                                var key = $item.data('key')
                                    , itemId = $item.parent().parent().data('itemid');
                                // 移除当前子元素
                                $item.remove();
                                delete diyData.items[itemId].data[key];
                                // 重新渲染diy元素
                                method.render.refreshDiyItem(itemId);
                                layer.close(index);
                            });
                        });
                    },

                    /**
                     * 添加子元素事件
                     * @param $html
                     */
                    itemAdd: function ($html) {
                        $html.find('.form-item-add').click(function () {
                            var $items = $(this).prev('.form-items')
                                , itemId = $items.parent().data('itemid')
                                , type = diyData.items[itemId].type;
                            // 添加子元素
                            method.editor.addItem[type](itemId, $items);
                            // 重新渲染diy元素
                            method.render.refreshDiyItem(itemId);
                        });
                    },

                    /**
                     * 选择图片文件
                     */
                    selectImages: function ($html) {
                        // 选择图片
                        $html.find('.input-group-addon').selectImages({
                            imagesList: '.item-image'
                            , done: function (data, $addon) {
                                $addon.prev('input').val(data[0].file_path).change();
                                $addon.next('input').val(data[0].file_path).change();
                                $addon.parent().parent().prev(this.imagesList).html(
                                    '<img src="' + data[0].file_path + '">'
                                );
                            }
                        });
                    }

                }
            },

            /**
             * 渲染类
             */
            render: {

                /**
                 * 渲染整个diy页面
                 */
                main: function () {
                    var html = '';
                    $.each(diyData.items, function (index, item) {
                        html += template('tpl_diy_' + item.type, item);
                    });
                    $(options.phoneMain).html(html);
                },

                /**
                 * 重新渲染diy子元素
                 * @param itemId
                 */
                refreshDiyItem: function (itemId) {
                    var item = diyData.items[itemId]
                        , html = template('tpl_diy_' + item.type, item)
                        , $diy = function () {
                        return $('#diy-' + item.id);
                    };
                    $diy().prop('outerHTML', html).addClass('selected');
                    $diy().addClass('selected');
                },

                /**
                 * 新增diy子元素
                 */
                insertDiyItem: function (type) {
                    // 新记录id
                    var diyItemId = method.diyData.newDataId();
                    var item = diyData.items[diyItemId] = $.extend(true, {}, {
                        id: diyItemId,
                        type: type
                    }, defaultData[type]);
                    // 处理子元素集
                    if (item.hasOwnProperty('data')) {
                        var data = {};
                        $.each(item.data, function (index, val) {
                            var dataId = method.diyData.newDataId();
                            data[dataId] = val;
                        });
                        item.data = data;
                    }
                    // 渲染页面
                    var html = template('tpl_diy_' + type, item);
                    $(options.phoneMain).append(html)
                        .find('#diy-' + diyItemId).trigger('click');
                },


                /**
                 * 渲染元素编辑器
                 * @param itemId
                 */
                editor: function (itemId) {
                    var item = diyData.items[itemId]
                        , $form = $(template('tpl_editor_' + item.type, item));
                    // 注册所有事件
                    method.editor.event.register($form, diyData);
                    // 写入编辑器
                    $('#diy-editor').find('.inner').html($form);
                    // // 注册文件上传
                    // method.editor.event.upload();
                }


            },

            /**
             * diy数据类
             */
            diyData: {

                /**
                 * 生成新增数据的id
                 * @returns {string}
                 */
                newDataId: function () {
                    return 'n' + Math.random().toString().substr(3);
                },

                /**
                 * 数据绑定
                 * @param itemId
                 * @param itemIndex
                 * @param val
                 */
                setData: function (itemId, itemIndex, val) {
                    var item = diyData.items[itemId][itemIndex[0]];
                    switch (itemIndex.length) {
                        case 1:
                            item = val;
                            break;
                        case 2:
                            item[itemIndex[1]] = val;
                            break;
                        case 3:
                            item[itemIndex[1]][itemIndex[2]] = val;
                            break;
                    }
                },

                /**
                 * 添加子元素数据
                 * @param itemId
                 * @param itemType
                 * @returns {*}
                 */
                additemData: function (itemId, itemType) {
                    var dataId = this.newDataId()
                        , defaultItemData = defaultData[itemType].data[0]
                        , data = $.extend(true, {dataId: dataId}, defaultItemData);
                    diyData.items[itemId].data[dataId] = data;
                    return data;
                },

                /**
                 * 删除diy元素
                 */
                deleteItem: function (itemId) {
                    delete diyData.items[itemId];
                }

            }

        };

    /***
     * 前端可视化diy
     * @constructor
     */
    function diyPhone(data, opts) {
        // diy 数据
        diyData = data;
        // 配置信息
        options = $.extend({}, {phoneMain: '#phone-main', editor: '#diy-editor'}, opts);
        // 执行初始化
        method.init.execute();
    }

    diyPhone.prototype = {};

    window.diyPhone = diyPhone;

})(window);
