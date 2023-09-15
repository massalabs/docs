"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[6952],{3905:(e,n,t)=>{t.d(n,{Zo:()=>_,kt:()=>m});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},_=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,_=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return t?o.createElement(m,r(r({ref:n},_),{},{components:t})):o.createElement(m,r({ref:n},_))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(7294),a=t(6010);const i={tabItem:"tabItem_Ymn6"};function r(e){let{children:n,hidden:t,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,r),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var o=t(7462),a=t(7294),i=t(6010),r=t(2466),s=t(6550),c=t(1980),l=t(7392),_=t(12);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:a}}=e;return{value:n,label:t,attributes:o,default:a}}))}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=p(e),[r,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:i}))),[c,l]=m({queryString:t,groupId:o}),[u,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,i]=(0,_.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:o}),f=(()=>{const e=c??u;return d({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),h(e)}),[l,h,i]),tabValues:i}}var f=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:n,block:t,selectedValue:s,selectValue:c,tabValues:l}=e;const _=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),p=e=>{const n=e.currentTarget,t=_.indexOf(n),o=l[t].value;o!==s&&(u(n),c(o))},d=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;n=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;n=_[t]??_[_.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},l.map((e=>{let{value:n,label:t,attributes:r}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>_.push(e),onKeyDown:d,onClick:p},r,{className:(0,i.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":s===n})}),t??n)})))}function x(e){let{lazy:n,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o}))))}function w(e){const n=h(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},a.createElement(g,(0,o.Z)({},e,n)),a.createElement(x,(0,o.Z)({},e,n)))}function k(e){const n=(0,f.Z)();return a.createElement(w,(0,o.Z)({key:String(n)},e))}},3353:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>_,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var o=t(7462),a=(t(7294),t(3905)),i=t(4866),r=t(5162);const s={id:"all-configs",sidebar_label:"Node and client configuration"},c="Node and client configuration",l={unversionedId:"node/all-configs",id:"node/all-configs",title:"Node and client configuration",description:"Use with caution, overriding some configurations could lead to node",source:"@site/docs/node/all-configs.mdx",sourceDirName:"node",slug:"/node/all-configs",permalink:"/docs/node/all-configs",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/node/all-configs.mdx",tags:[],version:"current",lastUpdatedBy:"Ena Redzic",lastUpdatedAt:1694763558,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{id:"all-configs",sidebar_label:"Node and client configuration"},sidebar:"nodeSidebar",previous:{title:"Testnet Staking Rewards Program",permalink:"/docs/node/reward"},next:{title:"Frequently Asked Questions",permalink:"/docs/node/faq"}},_={},u=[{value:"Node configuration",id:"node-configuration",level:2},{value:"Client configuration",id:"client-configuration",level:2}],p={toc:u},d="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node-and-client-configuration"},"Node and client configuration"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Use with caution, overriding some configurations could lead to node\ninstability and/or a complete desynchronization from Massa blockchain.")),(0,a.kt)("h2",{id:"node-configuration"},"Node configuration"),(0,a.kt)("p",null,"You can override the default configuration via\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"massa-node/config/config.toml")," file."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"buildnet",label:"\ud83d\udc77 BuildNet",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[logging]\nlevel = 2\n\n[api]\ndraw_lookahead_period_count = 10\nbind_private = "127.0.0.1:33034"\nbind_public = "0.0.0.0:33035"\nbind_api = "0.0.0.0:33036"\nmax_arguments = 128\nopenrpc_spec_path = "base_config/openrpc.json"\nmax_request_body_size = 52428800\nmax_response_body_size = 52428800\nmax_connections = 100\nmax_subscriptions_per_connection = 1024\nmax_log_length = 4096\nallow_hosts = []\nbatch_request_limit = 16\nping_interval = 60000\nenable_http = true\nenable_ws = true\nenable_broadcast = true\n\n[grpc]\nenabled = true\naccept_http1 = false\nenable_cors = false\nenable_health = true\nenable_reflection = true\nenable_mtls = false\nbind = "0.0.0.0:33037"\naccept_compressed = "Gzip"\nsend_compressed = "Gzip"\nmax_decoding_message_size = 52428800\nmax_encoding_message_size = 52428800\nmax_channel_size = 128\ntimeout = 60\nmax_frame_size = 16777215\nconcurrency_limit_per_connection = 32\nmax_concurrent_streams = 1024\ntcp_nodelay = true\ndraw_lookahead_period_count = 10\nmax_block_ids_per_request = 50\nmax_operation_ids_per_request = 250\nserver_certificate_path = "config/tls/server.pem"\nserver_private_key_path = "config/tls/server.key"\nclient_certificate_authority_root_path = "config/tls/client_ca.pem"\nenable = true\n\n[execution]\nmax_final_events = 10000\nreadonly_queue_length = 10\ncursor_delay = 2000\nstats_time_window_duration = 60000\nmax_read_only_gas = 4294967296\nabi_gas_costs_file = "base_config/gas_costs/abi_gas_costs.json"\nwasm_gas_costs_file = "base_config/gas_costs/wasm_gas_costs.json"\ninitial_vesting_path = "base_config/initial_vesting.json"\nhd_cache_path = "storage/cache/rocks_db"\nlru_cache_size = 200\nhd_cache_size = 2000\nsnip_amount = 10\nbroadcast_slot_execution_output_channel_capacity = 5000\n\n[ledger]\ninitial_ledger_path = "base_config/initial_ledger.json"\ndisk_ledger_path = "storage/ledger/rocks_db"\nfinal_history_length = 100\n\n[consensus]\nmax_discarded_blocks = 100\nmax_future_processing_blocks = 400\nmax_dependency_blocks = 2048\nforce_keep_final_periods_without_ops = 32\nforce_keep_final_periods = 5\nblock_db_prune_interval = 5000\nstats_timespan = 60000\nbroadcast_blocks_headers_channel_capacity = 128\nbroadcast_blocks_channel_capacity = 128\nbroadcast_filled_blocks_channel_capacity = 128\n\n[protocol]\nbind = "[::]:31244"\nconnect_timeout = 3000\nkeypair_file = "config/node_privkey.key"\ninitial_peers_file = "base_config/initial_peers.json"\nread_write_limit_bytes_per_second = 2000000000\nmessage_timeout = 5000\nask_block_timeout = 10000\nmax_known_blocks_size = 1024\nmax_node_known_blocks_size = 1024\nmax_node_wanted_blocks_size = 1024\nmax_simultaneous_ask_blocks_per_node = 128\nmax_send_wait = 0\nmax_known_ops_size = 1000000\nasked_operations_buffer_capacity = 600000\nmax_node_known_ops_size = 200000\nmax_known_endorsements_size = 2048\nmax_node_known_endorsements_size = 2048\noperation_batch_buffer_capacity = 10024\noperation_announcement_buffer_capacity = 2000\noperation_batch_proc_period = 500\noperation_announcement_interval = 300\nmax_operations_per_message = 1024\ntry_connection_timer = 5000\ntimeout_connection = 1000\nmax_ops_kept_for_propagation = 320000\nmax_operations_propagation_time = 32000\nmax_endorsements_propagation_time = 32000\nthread_tester_count = 25\nmax_in_connections = 100\n\n[network]\nroutable_ip = "37.187.156.118"\n\n[metrics]\nenabled = true\nbind = "[::]:31248"\ntick_delay = 5000\n\n[bootstrap]\nbootstrap_list = [ [ "149.202.84.7:31245", "N1kKfgrCveVnosUkxTzaBw5cf9f2cbTvK3R5Ssb2Pf76au8xwmH",], [ "149.202.84.39:31245", "N12sNdL7YwSawpnJrk9XCWDjKbgfNamAobp62AX5qfkgpBkGh2wC",], [ "37.187.156.118:31245", "N1NnuSW48GKGaYZamAVKXfXbbnt3StxWoHpYtBZSJvY9e8U1BTC",],]\nbootstrap_protocol = "Both"\nbootstrap_whitelist_path = "base_config/bootstrap_whitelist.json"\nbootstrap_blacklist_path = "base_config/bootstrap_blacklist.json"\nbind = "[::]:31245"\nconnect_timeout = 15000\nbootstrap_timeout = 1200000\nretry_delay = 60000\nmax_ping = 10000\nread_timeout = 100000\nwrite_timeout = 100000\nread_error_timeout = 200\nwrite_error_timeout = 200\nmax_clock_delta = 5000\ncache_duration = 15000\nmax_simultaneous_bootstraps = 2\nip_list_max_size = 10000\nper_ip_min_interval = 1000\nmax_bytes_read_write = 20000000\n\n[pool]\nmax_operation_pool_size = 500000\nmax_operation_pool_excess_items = 100000\noperation_pool_refresh_interval = 5000\noperation_max_future_start_delay = 50000\nmax_endorsements_pool_size_per_thread = 25000\nmax_item_return_count = 100\nbroadcast_endorsements_channel_capacity = 2000\nbroadcast_operations_channel_capacity = 5000\n\n[selector]\ninitial_rolls_path = "base_config/initial_rolls.json"\n\n[factory]\ninitial_delay = 100\nstaking_wallet_path = "config/staking_wallet.dat"\nstop_production_when_zero_connections = false\n\n[versioning]\nmip_stats_warn_announced_version = 30\n\n[protocol.default_category_info]\ntarget_out_connections = 10\nmax_in_connections_per_ip = 2\nmax_in_connections = 15\nallow_local_peers = false\n\n[protocol.peers_categories.Bootstrap]\ntarget_out_connections = 2\nmax_in_connections_per_ip = 1\nmax_in_connections = 2\nallow_local_peers = false\n\n[protocol.peers_categories.Standard]\ntarget_out_connections = 3\nmax_in_connections_per_ip = 1\nmax_in_connections = 10\nallow_local_peers = false\n\n[protocol.peers_categories.default_category_info]\ntarget_out_connections = 3\nmax_in_connections_per_ip = 1\nmax_in_connections = 10\nallow_local_peers = false\n\n'))),(0,a.kt)(r.Z,{value:"testnet",label:"\ud83e\uddd1\u200d\ud83d\udd2c TestNet",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[logging]\n    # Logging level. High log levels might impact performance. 0: ERROR, 1: WARN, 2: INFO, 3: DEBUG, 4: TRACE\n    level = 2\n\n[api]\n    # max number of future periods considered during requests\n    draw_lookahead_period_count = 10\n    # port on which the node API listens for admin and node management requests. Dangerous if publicly exposed. Bind to "[::1]:port" for IPv6\n    bind_private = "127.0.0.1:33034"\n    # port on which the node API listens for public requests. Can be exposed to the Internet. Bind to "[::]:port" for IPv6\n    bind_public = "0.0.0.0:33035"\n    # port on which the node API(V2) listens for HTTP requests and WebSockets subscriptions. Can be exposed to the Internet. Bind to "[::]:port" for IPv6\n    bind_api = "0.0.0.0:33036"\n    # max number of arguments per RPC call\n    max_arguments = 128\n    # path to the openrpc specification file used in `rpc.discover` method\n    openrpc_spec_path = "base_config/openrpc.json"\n    # maximum size in bytes of a request\n    max_request_body_size = 52428800\n    # maximum size in bytes of a response\n    max_response_body_size = 52428800\n    # maximum number of incoming connections allowed\n    max_connections = 100\n    # maximum number of subscriptions per connection\n    max_subscriptions_per_connection = 1024\n    # max length for logging for requests and responses. Logs bigger than this limit will be truncated\n    max_log_length = 4096\n    # host filtering\n    allow_hosts = []\n    # batch request limit. 0 means disabled\n    batch_request_limit = 16\n    # the interval at which `Ping` frames are submitted in milliseconds\n    ping_interval = 60000\n    # whether to enable HTTP.\n    enable_http = true\n    # whether to enable WS.\n    enable_ws = false\n    # whether to broadcast for blocks, endorsements and operations\n    enable_broadcast = false\n\n[grpc]\n    [grpc.public]\n        # whether to enable gRPC\n        enabled = true\n        # whether to add HTTP 1 layer\n        accept_http1 = false\n        # whether to enable CORS. works only if `accept_http1` is true\n        enable_cors = false\n        # whether to enable gRPC health service\n        enable_health = true\n        # whether to enable gRPC reflection(introspection)\n        enable_reflection = true\n        # whether to enable TLS\n        enable_tls = false\n        # whether to enable mTLS (requires `enable_tls` to be true)\n        enable_mtls = false\n        # whether to generate a self-signed certificate if none is provided(ignored if `enable_tls` is false)\n        generate_self_signed_certificates = true\n        # list of subject alternative names for the server certificate(requires `generate_self_signed_certificates` to be true)\n        subject_alt_names = []\n        # bind for the Massa gRPC API\n        bind = "0.0.0.0:33037"\n        # which compression encodings does the server accept for requests\n        accept_compressed = "Gzip"\n        # which compression encodings might the server use for responses\n        send_compressed = "Gzip"\n        # limits the maximum size of a decoded message. Defaults to 50MB\n        max_decoding_message_size = 52428800\n        # limits the maximum size of an encoded message. Defaults to 50MB\n        max_encoding_message_size = 52428800\n        # limits the maximum size of streaming channel\n        max_channel_size = 128\n        # set a timeout on for all request handlers in seconds. Defaults to 60s\n        timeout = 60\n        # sets the maximum frame size to use for HTTP2(must be within 16,384 and 16,777,215). Defaults to 16MB\n        max_frame_size = 16777215\n        # set the concurrency limit applied to on requests inbound per connection. Defaults to 32\n        concurrency_limit_per_connection = 32\n        # sets the SETTINGS_MAX_CONCURRENT_STREAMS spec option for HTTP2 connections\n        max_concurrent_streams = 1024\n        # max number of arguments per gRPC request\n        max_arguments = 128\n        # set the value of `TCP_NODELAY` option for accepted connections. Enabled by default\n        tcp_nodelay = true\n        # max number of future periods considered during requests\n        draw_lookahead_period_count = 10\n        # max number of addresses that can be included in a single request\n        max_addresses_per_request = 50\n        # max number of slot ranges that can be included in a single request\n        max_slot_ranges_per_request = 50\n        # max number of block ids that can be included in a single request\n        max_block_ids_per_request = 50\n        # max number of endorsement ids that can be included in a single request\n        max_endorsement_ids_per_request = 100\n        # max number of operation ids that can be included in a single request\n        max_operation_ids_per_request = 250\n        # max op datastore entries per request\n        max_datastore_entries_per_request = 128\n        # max number of filters that can be included in a single request\n        max_filters_per_request = 32\n        # certificate authority root path\n        certificate_authority_root_path = "config/tls_public_ca.pem"\n        # server certificate path\n        server_certificate_path = "config/tls_public_server.pem"\n        # server private key path\n        server_private_key_path = "config/tls_public_server.key"\n        # client certificate authority root path\n        client_certificate_authority_root_path = "config/tls_public_client_ca.pem"\n        # client certificate path\n        client_certificate_path = "../massa-client/config/tls_public_client.pem"\n        # client private key path\n        client_private_key_path = "../massa-client/config/tls_public_client.key"\n    [grpc.private]\n        # whether to enable gRPC\n        enabled = true\n        # whether to add HTTP 1 layer\n        accept_http1 = false\n        # whether to enable CORS. works only if `accept_http1` is true\n        enable_cors = false\n        # whether to enable gRPC health service\n        enable_health = true\n        # whether to enable gRPC reflection(introspection)\n        enable_reflection = true\n        # whether to enable TLS\n        enable_tls = false\n        # whether to enable mTLS (requires `enable_tls` to be true)\n        enable_mtls = true\n        # whether to generate a self-signed certificate if none is provided(ignored if `enable_tls` is false)\n        generate_self_signed_certificates = true\n        # list of subject alternative names for the server certificate(requires `generate_self_signed_certificates` to be true)\n        subject_alt_names = []\n        # bind for the Massa gRPC API\n        bind = "127.0.0.1:33038"\n        # which compression encodings does the server accept for requests\n        accept_compressed = "Gzip"\n        # which compression encodings might the server use for responses\n        send_compressed = "Gzip"\n        # limits the maximum size of a decoded message. Defaults to 50MB\n        max_decoding_message_size = 52428800\n        # limits the maximum size of an encoded message. Defaults to 50MB\n        max_encoding_message_size = 52428800\n        # limits the maximum size of streaming channel\n        max_channel_size = 128\n        # set a timeout on for all request handlers in seconds. Defaults to 60s\n        timeout = 60\n        # sets the maximum frame size to use for HTTP2(must be within 16,384 and 16,777,215). Defaults to 16MB\n        max_frame_size = 16777215\n        # set the concurrency limit applied to on requests inbound per connection. Defaults to 32\n        concurrency_limit_per_connection = 32\n        # sets the SETTINGS_MAX_CONCURRENT_STREAMS spec option for HTTP2 connections\n        max_concurrent_streams = 1024\n        # max number of arguments per gRPC request\n        max_arguments = 128\n        # set the value of `TCP_NODELAY` option for accepted connections. Enabled by default\n        tcp_nodelay = true\n        # max number of future periods considered during requests\n        draw_lookahead_period_count = 10\n        # max number of addresses that can be included in a single request\n        max_addresses_per_request = 50\n        # max number of slot ranges that can be included in a single request\n        max_slot_ranges_per_request = 50\n        # max number of block ids that can be included in a single request\n        max_block_ids_per_request = 50\n        # max number of endorsement ids that can be included in a single request\n        max_endorsement_ids_per_request = 100\n        # max number of operation ids that can be included in a single request\n        max_operation_ids_per_request = 250\n        # max op datastore entries per request\n        max_datastore_entries_per_request = 128\n        # max number of filters that can be included in a single request\n        max_filters_per_request = 32\n        # certificate authority root path\n        certificate_authority_root_path = "config/tls_private_ca.pem"\n        # server certificate path\n        server_certificate_path = "config/tls_private_server.pem"\n        # server private key path\n        server_private_key_path = "config/tls_private_server.key"\n        # client certificate authority root path\n        client_certificate_authority_root_path = "config/tls_private_client_ca.pem"\n        # client certificate path\n        client_certificate_path = "../massa-client/config/tls_private_client.pem"\n        # client private key path\n        client_private_key_path = "../massa-client/config/tls_private_client.key"\n[execution]\n    # max number of generated events kept in RAM\n    max_final_events = 10000\n    # maximum length of the read-only execution requests queue\n    readonly_queue_length = 10\n    # by how many milliseconds shoud the execution lag behind real time\n    # higher values increase speculative execution lag but improve performance\n    cursor_delay = 2000\n    # duration of the statistics time window in milliseconds\n    stats_time_window_duration = 60000\n    # maximum allowed gas for read only executions\n    max_read_only_gas = 4_294_967_295\n    # gas cost for ABIs\n    abi_gas_costs_file = "base_config/gas_costs/abi_gas_costs.json"\n    # gas cost for wasm operator\n    wasm_gas_costs_file = "base_config/gas_costs/wasm_gas_costs.json"\n    # path to the hard drive cache storage\n    hd_cache_path = "storage/cache/rocks_db"\n    # maximum number of entries we want to keep in the LRU cache\n    # in the worst case scenario this is equivalent to 2Gb\n    lru_cache_size = 200\n    # maximum number of entries we want to keep in the HD cache\n    # in the worst case scenario this is equivalent to 20Gb\n    hd_cache_size = 2000\n    # amount of entries removed when `hd_cache_size` is reached\n    snip_amount = 10\n    # slot execution outputs channel capacity\n    broadcast_slot_execution_output_channel_capacity = 5000\n\n[ledger]\n    # path to the initial ledger\n    initial_ledger_path = "base_config/initial_ledger.json"\n    # path to the disk ledger db directory\n    disk_ledger_path = "storage/ledger/rocks_db"\n    # length of the changes history. Higher values allow bootstrapping nodes with slower connections\n    final_history_length = 100\n    # path of the initial deferred credits file\n    initial_deferred_credits_path = "base_config/deferred_credits.json"\n\n[consensus]\n    # max number of previously discarded blocks kept in RAM\n    max_discarded_blocks = 100\n    # max number of blocks in the future kept in RAM\n    max_future_processing_blocks = 400\n    # max number of blocks waiting for dependencies\n    max_dependency_blocks = 2048\n    # number of final periods that must be kept without operations (increase improve bootstrap process, high values will increase RAM usage.)\n    force_keep_final_periods_without_ops = 32\n    # number of final periods that must be kept with operations (increase to more resilience to short network disconnections, high values will increase RAM usage.)\n    force_keep_final_periods = 5\n\n    # useless blocks are pruned every block_db_prune_interval ms\n    block_db_prune_interval = 5000\n\n    # considered timespan for stats info\n    stats_timespan = 60000\n\n    # blocks headers channel capacity\n    broadcast_blocks_headers_channel_capacity = 128\n    # blocks channel capacity\n    broadcast_blocks_channel_capacity = 128\n    # filled blocks channel capacity\n    broadcast_filled_blocks_channel_capacity = 128\n\n[protocol]\n    # port on which to listen for protocol communication. You may need to change this to "0.0.0.0:port" if IPv6 is disabled system-wide.\n    bind = "[::]:31244"\n    # timeout for connection establishment\n    connect_timeout = 3000\n    # path to the node key (not the staking key)\n    keypair_file = "config/node_privkey.key"\n    # path to the initial peers file\n    initial_peers_file = "base_config/initial_peers.json"\n    # Limit of read/write number of bytes per second with a peer (Should be a 10 multiple)\n    read_write_limit_bytes_per_second = 2_000_000_000\n    # timeout after which without answer a hanshake is ended\n    message_timeout = 5000\n    # timeout after which a peer tester will consider the peer unreachable\n    tester_timeout = 10000\n    # timeout after whick we consider a node does not have the block we asked for\n    ask_block_timeout = 10000\n    # Max known blocks we keep during their propagation\n    max_blocks_kept_for_propagation = 300\n    # Time during which a block is expected to propagate (in milliseconds)\n    max_block_propagation_time = 40000\n    # Block propagation tick interval, useful for propagating blocks quickly to newly connected peers (in milliseconds)\n    block_propagation_tick = 1000\n    # max cache size for which blocks our node knows about\n    max_known_blocks_size = 1024\n    # max cache size for which blocks a foreign node knows about\n    max_node_known_blocks_size = 1024\n    # max cache size for which blocks a foreign node asked for\n    max_node_wanted_blocks_size = 1024\n    # max number of blocks we can ask simultaneously per node\n    max_simultaneous_ask_blocks_per_node = 128\n    # max milliseconds to wait while sending an event before dropping it\n    max_send_wait = 0\n    # max cache size for which operations your node knows about\n    max_known_ops_size = 1000000\n    # max size of the cache of asked operations\n    asked_operations_buffer_capacity = 600000\n    # max cache size for which operations a foreign node knows about\n    max_node_known_ops_size = 200000\n    # max cache size for which endorsements our node knows about\n    max_known_endorsements_size = 2048\n    # max cache size for which endorsements a foreign node knows about\n    max_node_known_endorsements_size = 2048\n    # maximum number of batches in the memory buffer.\n    # dismiss the new batches if overflow\n    operation_batch_buffer_capacity = 10024\n    # immediately announce ops if overflow\n    operation_announcement_buffer_capacity = 2000\n    # start processing batches in the buffer each `operation_batch_proc_period` in millisecond\n    operation_batch_proc_period = 500\n    # interval at which operations are announced in batches.\n    operation_announcement_interval = 300\n    # max number of operation per message, same as network param but can be smaller\n    max_operations_per_message = 5000\n    # Number of millis seconds between each try out connections\n    try_connection_timer = 250\n    # Number of millis seconds between each try out connections for same peer\n    try_connection_timer_same_peer = 10000\n    # Number of millis seconds between each unban of every peer\n    unban_everyone_timer = 86400000\n    # Number of millis seconds that create a timeout for out connections\n    timeout_connection = 1000\n    # max number of operations kept for propagation\n    max_ops_kept_for_propagation = 320000\n    # time threshold after which operation are not propagated\n    max_operations_propagation_time = 32000\n    # time threshold after which endorsement are not propagated\n    max_endorsements_propagation_time = 32000\n    # number of thread tester\n    thread_tester_count = 25\n    # Nb max in connections that we accept\n    max_in_connections = 250\n    # Cooldown before testing again old peer\n    test_oldest_peer_cooldown = 720000\n    # Rate limitation on the data streams (per second)\n    rate_limit = 5_242_880    # 5 MiB / secs\n    # Peer default category limits\n    default_category_info = { target_out_connections = 10, max_in_connections_per_ip = 2, max_in_connections = 15, allow_local_peers = false }\n    # Peer categories limits\n    [protocol.peers_categories]\n    Bootstrap = { target_out_connections = 1, max_in_connections_per_ip = 1, max_in_connections = 1, allow_local_peers = false }\n\n[network]\n\n[metrics]\n    # enable prometheus metrics\n    enabled = true\n    # port on which to listen for prometheus metrics\n    bind = "[::]:31248"\n    # interval at which to update metrics\n    tick_delay = 5000\n\n\n[bootstrap]\n    # list of bootstrap (ip, node id)\n    bootstrap_list = [\n        ["149.202.86.103:31245", "N12UbyLJDS7zimGWf3LTHe8hYY67RdLke1iDRZqJbQQLHQSKPW8j"],\n        ["149.202.89.125:31245", "N12vxrYTQzS5TRzxLfFNYxn6PyEsphKWkdqx2mVfEuvJ9sPF43uq"],\n        ["158.69.120.215:31245", "N12rPDBmpnpnbECeAKDjbmeR19dYjAUwyLzsa8wmYJnkXLCNF28E"],\n        ["158.69.23.120:31245", "N1XxexKa3XNzvmakNmPawqFrE9Z2NFhfq1AhvV1Qx4zXq5p1Bp9"],\n        ["198.27.74.5:31245", "N1qxuqNnx9kyAMYxUfsYiv2gQd5viiBX126SzzexEdbbWd2vQKu"],\n        ["198.27.74.52:31245", "N1hdgsVsd4zkNp8cF1rdqqG6JPRQasAmx12QgJaJHBHFU1fRHEH"],\n        ["54.36.174.177:31245", "N1gEdBVEbRFbBxBtrjcTDDK9JPbJFDay27uiJRE3vmbFAFDKNh7"],\n        ["51.75.60.228:31245", "N13Ykon8Zo73PTKMruLViMMtE2rEG646JQ4sCcee2DnopmVM3P5"],\n        ["[2001:41d0:1004:67::]:31245", "N12UbyLJDS7zimGWf3LTHe8hYY67RdLke1iDRZqJbQQLHQSKPW8j"],\n        ["[2001:41d0:a:7f7d::]:31245", "N12vxrYTQzS5TRzxLfFNYxn6PyEsphKWkdqx2mVfEuvJ9sPF43uq"],\n        ["[2001:41d0:602:db1::]:31245", "N1gEdBVEbRFbBxBtrjcTDDK9JPbJFDay27uiJRE3vmbFAFDKNh7"],\n        ["[2001:41d0:602:21e4::]:31245", "N13Ykon8Zo73PTKMruLViMMtE2rEG646JQ4sCcee2DnopmVM3P5"],\n    ]\n    # force the bootstrap protocol to use: "IPv4", "IPv6", or "Both". Defaults to using both protocols.\n    bootstrap_protocol = "Both"\n    # path to the bootstrap whitelist file. This whitelist define IPs that can bootstrap on your node.\n    bootstrap_whitelist_path = "base_config/bootstrap_whitelist.json"\n    # path to the bootstrap blacklist file. This whitelist define IPs that will not be able to bootstrap on your node. This list is optional.\n    bootstrap_blacklist_path = "base_config/bootstrap_blacklist.json"\n    # [optional] port on which to listen for incoming bootstrap requests. You may need to change this to "0.0.0.0:port" if IPv6 is disabled system-wide.\n    bind = "[::]:31245"\n    # timeout to establish a bootstrap connection\n    connect_timeout = 15000\n    # timeout for providing the bootstrap to a connection\n    bootstrap_timeout = 1200000\n    # delay in milliseconds to wait between consecutive bootstrap attempts\n    retry_delay = 60000\n    # if ping is too high bootstrap will be interrupted after max_ping milliseconds\n    max_ping = 10000\n    # timeout for incoming message readout\n    read_timeout = 100000\n    # timeout for message sending\n    write_timeout = 100000\n    # timeout for incoming error message readout\n    read_error_timeout = 200\n    # timeout for message error sending\n    write_error_timeout = 200\n    # max allowed difference between client and servers clocks in ms\n    max_clock_delta = 5000\n    # [server] data is cached for cache duration milliseconds\n    cache_duration = 15000\n    # max number of simulataneous bootstraps for server\n    max_simultaneous_bootstraps = 2\n    # max size of recently bootstrapped IP cache\n    ip_list_max_size = 10000\n    # refuse consecutive bootstrap attempts from a given IP when the interval between them is lower than per_ip_min_interval milliseconds\n    per_ip_min_interval = 180000\n    # read-write limitation for a connection in bytes per seconds (about the bootstrap specifically)\n    rate_limit = 20_971_520    # 20 MiB /sec\n\n[pool]\n    # max number of operations kept in the pool\n    max_operation_pool_size = 500000\n    # max excess number of operations kept in pool in-between refreshes\n    max_operation_pool_excess_items = 100000\n    # refresh interval of the operation pool scoring (milliseconds)\n    operation_pool_refresh_interval = 5000\n    # if an operation is too much in the future it will be ignored (milliseconds)\n    operation_max_future_start_delay = 50000\n    # max number of endorsements kept per thread\n    max_endorsements_pool_size_per_thread = 25000\n    # max number of items returned per query\n    max_item_return_count = 100\n    # endorsements channel capacity\n    broadcast_endorsements_channel_capacity = 2000\n    # operations channel capacity\n    broadcast_operations_channel_capacity = 5000\n\n\n[selector]\n    # path to the initial roll distribution\n    initial_rolls_path = "base_config/initial_rolls.json"\n\n[factory]\n    # initial delay in milliseconds to wait before starting production to avoid double staking on node restart\n    initial_delay = 100\n    # path to your staking wallets\n    staking_wallet_path = "config/staking_wallets"\n    # stop or not the production in case we are not connected to anyone\n    stop_production_when_zero_connections = true\n\n[versioning]\n    # Warn user to update its node if we reach this percentage for announced network versions\n    mip_stats_warn_announced_version = 30\n\n')))),(0,a.kt)("h2",{id:"client-configuration"},"Client configuration"),(0,a.kt)("p",null,"You can override the default configuration via\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"massa-client/config/config.toml")," file."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"buildnet",label:"\ud83d\udc77 BuildNet",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'history = 10\nhistory_file_path = "config/.massa_history"\ntimeout = 1000\n\n[default_node]\n# The IP of your node. Works both with IPv4 (like 127.0.0.1) and IPv6 (like ::1) addresses, if the node is bound to the correct protocol.\nip = "127.0.0.1"\nprivate_port = 33034\npublic_port = 33035\ngrpc_port = 33037\n\n[client]\n    # maximum size in bytes of a request\n    max_request_body_size = 52428800\n    # request timeout\n    request_timeout = 60000\n    # maximum number of outcoming connections allowed\n    max_concurrent_requests = 100\n    # certificate_store, `Native` or `WebPki`\n    certificate_store = "Native"\n    # JSON-RPC request object id data type, `String` or `Number` \n    id_kind = "Number"\n    # max length for logging for requests and responses. Logs bigger than this limit will be truncated\n    max_log_length = 4096\n    # custom headers passed to the server with every request (default is empty).\n    headers = []\n\n    [client.http]\n        # whether to enable HTTP.\n        enabled = true\n'))),(0,a.kt)(r.Z,{value:"testnet",label:"\ud83e\uddd1\u200d\ud83d\udd2c TestNet",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'history = 10\nhistory_file_path = "config/.massa_history"\ntimeout = 1000\n\n[default_node]\n# The IP of your node. Works both with IPv4 (like 127.0.0.1) and IPv6 (like ::1) addresses, if the node is bound to the correct protocol.\nip = "127.0.0.1"\nprivate_port = 33034\npublic_port = 33035\ngrpc_public_port = 33037\ngrpc_private_port = 33038\n\n[client]\n    # maximum size in bytes of a request\n    max_request_body_size = 52428800\n    # request timeout\n    request_timeout = 60000\n    # maximum number of outcoming connections allowed\n    max_concurrent_requests = 100\n    # certificate_store, `Native` or `WebPki`\n    certificate_store = "Native"\n    # JSON-RPC request object id data type, `String` or `Number` \n    id_kind = "Number"\n    # max length for logging for requests and responses. Logs bigger than this limit will be truncated\n    max_log_length = 4096\n    # custom headers passed to the server with every request (default is empty).\n    headers = []\n\n    [client.http]\n        # whether to enable HTTP.\n        enabled = true\n')))))}m.isMDXComponent=!0}}]);