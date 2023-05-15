---
aside: false
---

<!--@include: ../partials/libraries.md-->

<CodeBox lang="Restful" method="GET" endpoint="/v1/general/platforms">

# List

Using our platform list Method, users are now able to easily retrieve platforms list.

<!--@include: /partials/authorization.md-->

<template #params>

- `title` (optional) <span>String</span>, Filter by platform title.
- `status` (optional) <span>Integer</span>, Filter by status code. Check out [Status Codes](#status-codes).
- `sort` (optional) <span>String</span>, sort platforms.
    - sort[title]=asc
    - sort[status]=asc

</template>

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/general/platforms
```

</template>

</CodeBox>

<Response jfile="v1/platform/list" >
<template #result>

- `id` <span>String</span> ID of platform.
- `title` <span>String</span> Title of platform.
- `slug` <span>String</span> Slug of platform.
- `icon` <span>String</span> Icon of platform.
- `cover` <span>String</span> Cover of platform.
- `description` <span>String</span> Description of platform.
- `content` <span>Text</span> Content.
- `url` <span>String</span> URL of platform.
- `email` <span>String</span> Email.
- `privacy_policy` <span>Text</span> privacy policy.
- `terms_of_use` <span>Text</span> terms of use.
- `api_documentation` <span>Text</span> api documentation.
- `address` <span>Text</span> address.
- `permissions` <span>String</span> platform permissions.
- `oss` <span>String</span> platform Operating Systems.
- `status` <span>Integer</span> The status of platform. Check out [Status Codes](#status-codes).

</template>
</Response>

<CodeBox lang="Restful" method="GET" endpoint="/v1/general/platforms/:id/server">

# sever

Using our platform list Method, users are now able to easily retrieve platforms list.

<!--@include: /partials/authorization.md-->

<template #params>

- `id`  <span>Integer</span>, id of platform.


</template>

<template #code>

```bash
$ curl --request GET \
  https://api.trader4.net/v1/general/platforms/:id/server
```

</template>

</CodeBox>

<Response jfile="v1/platform/server" >
<template #result>

- `id` <span>String</span> ID of server.
- `title` <span>String</span> Title of server.

</template>
</Response>


### Status Codes
| CODE               | CONSTANT            | DESCRIPTION                                         |
|--------------------|---------------------|-----------------------------------------------------|
| <code>11600</code> | <pre>ACTIVE</pre>   | The platform is active and have full functionality. |
| <code>11601</code> | <pre>INACTIVE</pre> | The platform is inactive and just can read data.    |



### Permission Codes
| CODE               | CONSTANT            | DESCRIPTION                                         |
|--------------------|---------------------|-----------------------------------------------------|
| <code>11700</code> | <pre>ACCESS_ALL_DOWNLOADS</pre>   | Access all downloads |
| <code>11701</code> | <pre>ACCESS_BLUETOOTH_SHARE</pre>   | Access bluetooth share |
| <code>11702</code> | <pre>ACCESS_CACHE_FILESYSTEM</pre>   | Access cache filesystem |
| <code>11703</code> | <pre>ACCESS_CHECKIN_PROPERTIES</pre>   | Access checkin properties |
| <code>11704</code> | <pre>ACCESS_CONTENT_PROVIDERS_EXTERNALLY</pre>   | Access content providers externally |
| <code>11705</code> | <pre>ACCESS_DOWNLOAD_MANAGER</pre>   | Access download manager |
| <code>11706</code> | <pre>ACCESS_DOWNLOAD_MANAGER_ADVANCED</pre>   | Access download manager advanced |
| <code>11707</code> | <pre>ACCESS_DRM_CERTIFICATES</pre>   | Access drm certificates |
| <code>11708</code> | <pre>ACCESS_EPHEMERAL_APPS</pre>   | Access ephemeral apps |
| <code>11709</code> | <pre>ACCESS_FM_RADIO</pre>   | Access fm radio |
| <code>11710</code> | <pre>ACCESS_INPUT_FLINGER</pre>   | Access input flinger |
| <code>11711</code> | <pre>ACCESS_KEYGUARD_SECURE_STORAGE</pre>   | Access keyguard secure storage |
| <code>11712</code> | <pre>ACCESS_LOCATION_EXTRA_COMMANDS</pre>   | Access location extra commands |
| <code>11713</code> | <pre>ACCESS_MOCK_LOCATION</pre>   | Access mock location |
| <code>11714</code> | <pre>ACCESS_MTP</pre>   | Access mtp |
| <code>11715</code> | <pre>ACCESS_NETWORK_CONDITIONS</pre>   | Access network conditions |
| <code>11716</code> | <pre>ACCESS_NETWORK_STATE</pre>   | Access network state |
| <code>11717</code> | <pre>ACCESS_NOTIFICATIONS</pre>   | Access notifications |
| <code>11718</code> | <pre>ACCESS_NOTIFICATION_POLICY</pre>   | Access notification policy |
| <code>11719</code> | <pre>ACCESS_PDB_STATE</pre>   | Access pdb state |
| <code>11720</code> | <pre>ACCESS_SURFACE_FLINGER</pre>   | Access surface flinger |
| <code>11721</code> | <pre>ACCESS_VOICE_INTERACTION_SERVICE</pre>   | Access voice interaction service |
| <code>11722</code> | <pre>ACCESS_VR_MANAGER</pre>   | Access vr manager |
| <code>11723</code> | <pre>ACCESS_WIFI_STATE</pre>   | Access wifi state |
| <code>11724</code> | <pre>ACCESS_WIMAX_STATE</pre>   | Access wimax state |
| <code>11725</code> | <pre>ACCOUNT_MANAGER</pre>   | Account manager |
| <code>11726</code> | <pre>ALLOW_ANY_CODEC_FOR_PLAYBACK</pre>   | Allow any codec for playback |
| <code>11727</code> | <pre>ASEC_ACCESS</pre>   | Asec access |
| <code>11728</code> | <pre>ASEC_CREATE</pre>   | Asec create |
| <code>11729</code> | <pre>ASEC_DESTROY</pre>   | Asec destroy |
| <code>11730</code> | <pre>ASEC_MOUNT_UNMOUNT</pre>   | Asec mount unmount |
| <code>11731</code> | <pre>ASEC_RENAME</pre>   | Asec rename |
| <code>11732</code> | <pre>AUTHENTICATE_ACCOUNTS</pre>   | Authenticate accounts |
| <code>11733</code> | <pre>BACKUP</pre>   | Backup |
| <code>11734</code> | <pre>BATTERY_STATS</pre>   | Battery stats |
| <code>11735</code> | <pre>BIND_ACCESSIBILITY_SERVICE</pre>   | Bind accessibility service |
| <code>11736</code> | <pre>BIND_APPWIDGET</pre>   | Bind appwidget |
| <code>11737</code> | <pre>BIND_CARRIER_MESSAGING_SERVICE</pre>   | Bind carrier messaging service |
| <code>11738</code> | <pre>BIND_CARRIER_SERVICES</pre>   | Bind carrier services |
| <code>11739</code> | <pre>BIND_CHOOSER_TARGET_SERVICE</pre>   | Bind chooser target service |
| <code>11740</code> | <pre>BIND_CONDITION_PROVIDER_SERVICE</pre>   | Bind condition provider service |
| <code>11741</code> | <pre>BIND_CONNECTION_SERVICE</pre>   | Bind connection service |
| <code>11742</code> | <pre>BIND_DEVICE_ADMIN</pre>   | Bind device admin |
| <code>11743</code> | <pre>BIND_DIRECTORY_SEARCH</pre>   | Bind directory search |
| <code>11744</code> | <pre>BIND_DREAM_SERVICE</pre>   | Bind dream service |
| <code>11745</code> | <pre>BIND_INCALL_SERVICE</pre>   | Bind incall service |
| <code>11746</code> | <pre>BIND_INPUT_METHOD</pre>   | Bind input method |
| <code>11747</code> | <pre>BIND_INTENT_FILTER_VERIFIER</pre>   | Bind intent filter verifier |
| <code>11748</code> | <pre>BIND_JOB_SERVICE</pre>   | Bind job service |
| <code>11749</code> | <pre>BIND_KEYGUARD_APPWIDGET</pre>   | Bind keyguard appwidget |
| <code>11750</code> | <pre>BIND_MIDI_DEVICE_SERVICE</pre>   | Bind midi device service |
| <code>11751</code> | <pre>BIND_NFC_SERVICE</pre>   | Bind nfc service |
| <code>11752</code> | <pre>BIND_NOTIFICATION_LISTENER_SERVICE</pre>   | Bind notification listener service |
| <code>11753</code> | <pre>BIND_NOTIFICATION_RANKER_SERVICE</pre>   | Bind notification ranker service |
| <code>11754</code> | <pre>BIND_PACKAGE_VERIFIER</pre>   | Bind package verifier |
| <code>11755</code> | <pre>BIND_PRINT_RECOMMENDATION_SERVICE</pre>   | Bind print recommendation service |
| <code>11756</code> | <pre>BIND_PRINT_SERVICE</pre>   | Bind print service |
| <code>11757</code> | <pre>BIND_PRINT_SPOOLER_SERVICE</pre>   | Bind print spooler service |
| <code>11758</code> | <pre>BIND_QUICK_SETTINGS_TILE</pre>   | Bind quick settings tile |
| <code>11759</code> | <pre>BIND_REMOTEVIEWS</pre>   | Bind remoteviews |
| <code>11760</code> | <pre>BIND_REMOTE_DISPLAY</pre>   | Bind remote display |
| <code>11761</code> | <pre>BIND_ROUTE_PROVIDER</pre>   | Bind route provider |
| <code>11762</code> | <pre>BIND_RUNTIME_PERMISSION_PRESENTER_SERVICE</pre>   | Bind runtime permission presenter service |
| <code>11763</code> | <pre>BIND_SCREENING_SERVICE</pre>   | Bind screening service |
| <code>11764</code> | <pre>BIND_TELECOM_CONNECTION_SERVICE</pre>   | Bind telecom connection service |
| <code>11765</code> | <pre>BIND_TEXT_SERVICE</pre>   | Bind text service |
| <code>11766</code> | <pre>BIND_TRUST_AGENT</pre>   | Bind trust agent |
| <code>11767</code> | <pre>BIND_TV_INPUT</pre>   | Bind tv input |
| <code>11768</code> | <pre>BIND_TV_REMOTE_SERVICE</pre>   | Bind tv remote service |
| <code>11769</code> | <pre>BIND_VOICE_INTERACTION</pre>   | Bind voice interaction |
| <code>11770</code> | <pre>BIND_VPN_SERVICE</pre>   | Bind vpn service |
| <code>11771</code> | <pre>BIND_VR_LISTENER_SERVICE</pre>   | Bind vr listener service |
| <code>11772</code> | <pre>BIND_WALLPAPER</pre>   | Bind wallpaper |
| <code>11773</code> | <pre>BLUETOOTH</pre>   | Bluetooth |
| <code>11774</code> | <pre>BLUETOOTH_ADMIN</pre>   | Bluetooth admin |
| <code>11775</code> | <pre>BLUETOOTH_MAP</pre>   | Bluetooth map |
| <code>11776</code> | <pre>BLUETOOTH_PRIVILEGED</pre>   | Bluetooth privileged |
| <code>11777</code> | <pre>BLUETOOTH_STACK</pre>   | Bluetooth stack |
| <code>11778</code> | <pre>BRICK</pre>   | Brick |
| <code>11779</code> | <pre>BROADCAST_CALLLOG_INFO</pre>   | Broadcast calllog info |
| <code>11780</code> | <pre>BROADCAST_NETWORK_PRIVILEGED</pre>   | Broadcast network privileged |
| <code>11781</code> | <pre>BROADCAST_PACKAGE_REMOVED</pre>   | Broadcast package removed |
| <code>11782</code> | <pre>BROADCAST_PHONE_ACCOUNT_REGISTRATION</pre>   | Broadcast phone account registration |
| <code>11783</code> | <pre>BROADCAST_SMS</pre>   | Broadcast sms |
| <code>11784</code> | <pre>BROADCAST_STICKY</pre>   | Broadcast sticky |
| <code>11785</code> | <pre>BROADCAST_WAP_PUSH</pre>   | Broadcast wap push |
| <code>11786</code> | <pre>CACHE_CONTENT</pre>   | Cache content |
| <code>11787</code> | <pre>CALL_PRIVILEGED</pre>   | Call privileged |
| <code>11788</code> | <pre>CAMERA_DISABLE_TRANSMIT_LED</pre>   | Camera disable transmit led |
| <code>11789</code> | <pre>CAMERA_SEND_SYSTEM_EVENTS</pre>   | Camera send system events |
| <code>11790</code> | <pre>CAPTURE_AUDIO_HOTWORD</pre>   | Capture audio hotword |
| <code>11791</code> | <pre>CAPTURE_AUDIO_OUTPUT</pre>   | Capture audio output |
| <code>11792</code> | <pre>CAPTURE_SECURE_VIDEO_OUTPUT</pre>   | Capture secure video output |
| <code>11793</code> | <pre>CAPTURE_TV_INPUT</pre>   | Capture tv input |
| <code>11794</code> | <pre>CAPTURE_VIDEO_OUTPUT</pre>   | Capture video output |
| <code>11795</code> | <pre>CARRIER_FILTER_SMS</pre>   | Carrier filter sms |
| <code>11796</code> | <pre>CHANGE_APP_IDLE_STATE</pre>   | Change app idle state |
| <code>11797</code> | <pre>CHANGE_BACKGROUND_DATA_SETTING</pre>   | Change background data setting |
| <code>11798</code> | <pre>CHANGE_COMPONENT_ENABLED_STATE</pre>   | Change component enabled state |
| <code>11799</code> | <pre>CHANGE_CONFIGURATION</pre>   | Change configuration |
| <code>11800</code> | <pre>CHANGE_DEVICE_IDLE_TEMP_WHITELIST</pre>   | Change device idle temp whitelist |
| <code>11801</code> | <pre>CHANGE_NETWORK_STATE</pre>   | Change network state |
| <code>11802</code> | <pre>CHANGE_WIFI_MULTICAST_STATE</pre>   | Change wifi multicast state |
| <code>11803</code> | <pre>CHANGE_WIFI_STATE</pre>   | Change wifi state |
| <code>11804</code> | <pre>CHANGE_WIMAX_STATE</pre>   | Change wimax state |
| <code>11805</code> | <pre>CLEAR_APP_CACHE</pre>   | Clear app cache |
| <code>11806</code> | <pre>CLEAR_APP_GRANTED_URI_PERMISSIONS</pre>   | Clear app granted uri permissions |
| <code>11807</code> | <pre>CLEAR_APP_USER_DATA</pre>   | Clear app user data |
| <code>11808</code> | <pre>CONFIGURE_DISPLAY_COLOR_TRANSFORM</pre>   | Configure display color transform |
| <code>11809</code> | <pre>CONFIGURE_WIFI_DISPLAY</pre>   | Configure wifi display |
| <code>11810</code> | <pre>CONFIRM_FULL_BACKUP</pre>   | Confirm full backup |
| <code>11811</code> | <pre>CONNECTIVITY_INTERNAL</pre>   | Connectivity internal |
| <code>11812</code> | <pre>CONTROL_INCALL_EXPERIENCE</pre>   | Control incall experience |
| <code>11813</code> | <pre>CONTROL_KEYGUARD</pre>   | Control keyguard |
| <code>11814</code> | <pre>CONTROL_LOCATION_UPDATES</pre>   | Control location updates |
| <code>11815</code> | <pre>CONTROL_VPN</pre>   | Control vpn |
| <code>11816</code> | <pre>CONTROL_WIFI_DISPLAY</pre>   | Control wifi display |
| <code>11817</code> | <pre>COPY_PROTECTED_DATA</pre>   | Copy protected data |
| <code>11818</code> | <pre>CREATE_USERS</pre>   | Create users |
| <code>11819</code> | <pre>CRYPT_KEEPER</pre>   | Crypt keeper |
| <code>11820</code> | <pre>DELETE_CACHE_FILES</pre>   | Delete cache files |
| <code>11821</code> | <pre>DELETE_PACKAGES</pre>   | Delete packages |
| <code>11822</code> | <pre>DEVICE_POWER</pre>   | Device power |
| <code>11823</code> | <pre>DIAGNOSTIC</pre>   | Diagnostic |
| <code>11824</code> | <pre>DISABLE_KEYGUARD</pre>   | Disable keyguard |
| <code>11825</code> | <pre>DISPATCH_NFC_MESSAGE</pre>   | Dispatch nfc message |
| <code>11826</code> | <pre>DISPATCH_PROVISIONING_MESSAGE</pre>   | Dispatch provisioning message |
| <code>11827</code> | <pre>DOWNLOAD_CACHE_NON_PURGEABLE</pre>   | Download cache non purgeable |
| <code>11828</code> | <pre>DUMP</pre>   | Dump |
| <code>11829</code> | <pre>DVB_DEVICE</pre>   | Dvb device |
| <code>11830</code> | <pre>EXPAND_STATUS_BAR</pre>   | Expand status bar |
| <code>11831</code> | <pre>FACTORY_TEST</pre>   | Factory test |
| <code>11832</code> | <pre>FILTER_EVENTS</pre>   | Filter events |
| <code>11833</code> | <pre>FLASHLIGHT</pre>   | Flashlight |
| <code>11834</code> | <pre>FORCE_BACK</pre>   | Force back |
| <code>11835</code> | <pre>FORCE_STOP_PACKAGES</pre>   | Force stop packages |
| <code>11836</code> | <pre>FRAME_STATS</pre>   | Frame stats |
| <code>11837</code> | <pre>FREEZE_SCREEN</pre>   | Freeze screen |
| <code>11838</code> | <pre>GET_ACCOUNTS_PRIVILEGED</pre>   | Get accounts privileged |
| <code>11839</code> | <pre>GET_APP_GRANTED_URI_PERMISSIONS</pre>   | Get app granted uri permissions |
| <code>11840</code> | <pre>GET_APP_OPS_STATS</pre>   | Get app ops stats |
| <code>11841</code> | <pre>GET_DETAILED_TASKS</pre>   | Get detailed tasks |
| <code>11842</code> | <pre>GET_INTENT_SENDER_INTENT</pre>   | Get intent sender intent |
| <code>11843</code> | <pre>GET_PACKAGE_IMPORTANCE</pre>   | Get package importance |
| <code>11844</code> | <pre>GET_PACKAGE_SIZE</pre>   | Get package size |
| <code>11845</code> | <pre>GET_PASSWORD</pre>   | Get password |
| <code>11846</code> | <pre>GET_PROCESS_STATE_AND_OOM_SCORE</pre>   | Get process state and oom score |
| <code>11847</code> | <pre>GET_TASKS</pre>   | Get tasks |
| <code>11848</code> | <pre>GET_TOP_ACTIVITY_INFO</pre>   | Get top activity info |
| <code>11849</code> | <pre>GLOBAL_SEARCH</pre>   | Global search |
| <code>11850</code> | <pre>GLOBAL_SEARCH_CONTROL</pre>   | Global search control |
| <code>11851</code> | <pre>GRANT_RUNTIME_PERMISSIONS</pre>   | Grant runtime permissions |
| <code>11852</code> | <pre>HARDWARE_TEST</pre>   | Hardware test |
| <code>11853</code> | <pre>HDMI_CEC</pre>   | Hdmi cec |
| <code>11854</code> | <pre>INJECT_EVENTS</pre>   | Inject events |
| <code>11855</code> | <pre>INSTALL_GRANT_RUNTIME_PERMISSIONS</pre>   | Install grant runtime permissions |
| <code>11856</code> | <pre>INSTALL_LOCATION_PROVIDER</pre>   | Install location provider |
| <code>11857</code> | <pre>INSTALL_PACKAGES</pre>   | Install packages |
| <code>11858</code> | <pre>INTENT_FILTER_VERIFICATION_AGENT</pre>   | Intent filter verification agent |
| <code>11859</code> | <pre>INTERACT_ACROSS_USERS</pre>   | Interact across users |
| <code>11860</code> | <pre>INTERACT_ACROSS_USERS_FULL</pre>   | Interact across users full |
| <code>11861</code> | <pre>INTERNAL_SYSTEM_WINDOW</pre>   | Internal system window |
| <code>11862</code> | <pre>INTERNET</pre>   | Internet |
| <code>11863</code> | <pre>INVOKE_CARRIER_SETUP</pre>   | Invoke carrier setup |
| <code>11864</code> | <pre>KILL_BACKGROUND_PROCESSES</pre>   | Kill background processes |
| <code>11865</code> | <pre>KILL_UID</pre>   | Kill uid |
| <code>11866</code> | <pre>LAUNCH_TRUST_AGENT_SETTINGS</pre>   | Launch trust agent settings |
| <code>11867</code> | <pre>LOCAL_MAC_ADDRESS</pre>   | Local mac address |
| <code>11868</code> | <pre>LOCATION_HARDWARE</pre>   | Location hardware |
| <code>11869</code> | <pre>LOOP_RADIO</pre>   | Loop radio |
| <code>11870</code> | <pre>MANAGE_ACCOUNTS</pre>   | Manage accounts |
| <code>11871</code> | <pre>MANAGE_ACTIVITY_STACKS</pre>   | Manage activity stacks |
| <code>11872</code> | <pre>MANAGE_APP_OPS_RESTRICTIONS</pre>   | Manage app ops restrictions |
| <code>11873</code> | <pre>MANAGE_APP_TOKENS</pre>   | Manage app tokens |
| <code>11874</code> | <pre>MANAGE_CA_CERTIFICATES</pre>   | Manage ca certificates |
| <code>11875</code> | <pre>MANAGE_DEVICE_ADMINS</pre>   | Manage device admins |
| <code>11876</code> | <pre>MANAGE_DOCUMENTS</pre>   | Manage documents |
| <code>11877</code> | <pre>MANAGE_FINGERPRINT</pre>   | Manage fingerprint |
| <code>11878</code> | <pre>MANAGE_MEDIA_PROJECTION</pre>   | Manage media projection |
| <code>11879</code> | <pre>MANAGE_NETWORK_POLICY</pre>   | Manage network policy |
| <code>11880</code> | <pre>MANAGE_NOTIFICATIONS</pre>   | Manage notifications |
| <code>11881</code> | <pre>MANAGE_PROFILE_AND_DEVICE_OWNERS</pre>   | Manage profile and device owners |
| <code>11882</code> | <pre>MANAGE_SOUND_TRIGGER</pre>   | Manage sound trigger |
| <code>11883</code> | <pre>MANAGE_USB</pre>   | Manage usb |
| <code>11884</code> | <pre>MANAGE_USERS</pre>   | Manage users |
| <code>11885</code> | <pre>MANAGE_VOICE_KEYPHRASES</pre>   | Manage voice keyphrases |
| <code>11886</code> | <pre>MASTER_CLEAR</pre>   | Master clear |
| <code>11887</code> | <pre>MEDIA_CONTENT_CONTROL</pre>   | Media content control |
| <code>11888</code> | <pre>MODIFY_APPWIDGET_BIND_PERMISSIONS</pre>   | Modify appwidget bind permissions |
| <code>11889</code> | <pre>MODIFY_AUDIO_ROUTING</pre>   | Modify audio routing |
| <code>11890</code> | <pre>MODIFY_AUDIO_SETTINGS</pre>   | Modify audio settings |
| <code>11891</code> | <pre>MODIFY_CELL_BROADCASTS</pre>   | Modify cell broadcasts |
| <code>11892</code> | <pre>MODIFY_DAY_NIGHT_MODE</pre>   | Modify day night mode |
| <code>11893</code> | <pre>MODIFY_NETWORK_ACCOUNTING</pre>   | Modify network accounting |
| <code>11894</code> | <pre>MODIFY_PARENTAL_CONTROLS</pre>   | Modify parental controls |
| <code>11895</code> | <pre>MODIFY_PHONE_STATE</pre>   | Modify phone state |
| <code>11896</code> | <pre>MOUNT_FORMAT_FILESYSTEMS</pre>   | Mount format filesystems |
| <code>11897</code> | <pre>MOUNT_UNMOUNT_FILESYSTEMS</pre>   | Mount unmount filesystems |
| <code>11898</code> | <pre>MOVE_PACKAGE</pre>   | Move package |
| <code>11899</code> | <pre>NET_ADMIN</pre>   | Net admin |
| <code>11900</code> | <pre>NET_TUNNELING</pre>   | Net tunneling |
| <code>11901</code> | <pre>NFC</pre>   | Nfc |
| <code>11902</code> | <pre>NFC_HANDOVER_STATUS</pre>   | Nfc handover status |
| <code>11903</code> | <pre>NOTIFY_PENDING_SYSTEM_UPDATE</pre>   | Notify pending system update |
| <code>11904</code> | <pre>OBSERVE_GRANT_REVOKE_PERMISSIONS</pre>   | Observe grant revoke permissions |
| <code>11905</code> | <pre>OEM_UNLOCK_STATE</pre>   | Oem unlock state |
| <code>11906</code> | <pre>OVERRIDE_WIFI_CONFIG</pre>   | Override wifi config |
| <code>11907</code> | <pre>PACKAGE_USAGE_STATS</pre>   | Package usage stats |
| <code>11908</code> | <pre>PACKAGE_VERIFICATION_AGENT</pre>   | Package verification agent |
| <code>11909</code> | <pre>PACKET_KEEPALIVE_OFFLOAD</pre>   | Packet keepalive offload |
| <code>11910</code> | <pre>PEERS_MAC_ADDRESS</pre>   | Peers mac address |
| <code>11911</code> | <pre>PERFORM_CDMA_PROVISIONING</pre>   | Perform cdma provisioning |
| <code>11912</code> | <pre>PERFORM_SIM_ACTIVATION</pre>   | Perform sim activation |
| <code>11913</code> | <pre>PERSISTENT_ACTIVITY</pre>   | Persistent activity |
| <code>11914</code> | <pre>PROCESS_CALLLOG_INFO</pre>   | Process calllog info |
| <code>11915</code> | <pre>PROCESS_PHONE_ACCOUNT_REGISTRATION</pre>   | Process phone account registration |
| <code>11916</code> | <pre>PROVIDE_TRUST_AGENT</pre>   | Provide trust agent |
| <code>11917</code> | <pre>QUERY_DO_NOT_ASK_CREDENTIALS_ON_BOOT</pre>   | Query do not ask credentials on boot |
| <code>11918</code> | <pre>READ_BLOCKED_NUMBERS</pre>   | Read blocked numbers |
| <code>11919</code> | <pre>READ_DREAM_STATE</pre>   | Read dream state |
| <code>11920</code> | <pre>READ_FRAME_BUFFER</pre>   | Read frame buffer |
| <code>11921</code> | <pre>READ_INPUT_STATE</pre>   | Read input state |
| <code>11922</code> | <pre>READ_INSTALL_SESSIONS</pre>   | Read install sessions |
| <code>11923</code> | <pre>READ_LOGS</pre>   | Read logs |
| <code>11924</code> | <pre>READ_NETWORK_USAGE_HISTORY</pre>   | Read network usage history |
| <code>11925</code> | <pre>READ_OEM_UNLOCK_STATE</pre>   | Read oem unlock state |
| <code>11926</code> | <pre>READ_PRECISE_PHONE_STATE</pre>   | Read precise phone state |
| <code>11927</code> | <pre>READ_PRIVILEGED_PHONE_STATE</pre>   | Read privileged phone state |
| <code>11928</code> | <pre>READ_PROFILE</pre>   | Read profile |
| <code>11929</code> | <pre>READ_SEARCH_INDEXABLES</pre>   | Read search indexables |
| <code>11930</code> | <pre>READ_SOCIAL_STREAM</pre>   | Read social stream |
| <code>11931</code> | <pre>READ_SYNC_SETTINGS</pre>   | Read sync settings |
| <code>11932</code> | <pre>READ_SYNC_STATS</pre>   | Read sync stats |
| <code>11933</code> | <pre>READ_USER_DICTIONARY</pre>   | Read user dictionary |
| <code>11934</code> | <pre>READ_WIFI_CREDENTIAL</pre>   | Read wifi credential |
| <code>11935</code> | <pre>REAL_GET_TASKS</pre>   | Real get tasks |
| <code>11936</code> | <pre>REBOOT</pre>   | Reboot |
| <code>11937</code> | <pre>RECEIVE_BLUETOOTH_MAP</pre>   | Receive bluetooth map |
| <code>11938</code> | <pre>RECEIVE_BOOT_COMPLETED</pre>   | Receive boot completed |
| <code>11939</code> | <pre>RECEIVE_DATA_ACTIVITY_CHANGE</pre>   | Receive data activity change |
| <code>11940</code> | <pre>RECEIVE_EMERGENCY_BROADCAST</pre>   | Receive emergency broadcast |
| <code>11941</code> | <pre>RECEIVE_MEDIA_RESOURCE_USAGE</pre>   | Receive media resource usage |
| <code>11942</code> | <pre>RECEIVE_STK_COMMANDS</pre>   | Receive stk commands |
| <code>11943</code> | <pre>RECEIVE_WIFI_CREDENTIAL_CHANGE</pre>   | Receive wifi credential change |
| <code>11944</code> | <pre>RECOVERY</pre>   | Recovery |
| <code>11945</code> | <pre>REGISTER_CALL_PROVIDER</pre>   | Register call provider |
| <code>11946</code> | <pre>REGISTER_CONNECTION_MANAGER</pre>   | Register connection manager |
| <code>11947</code> | <pre>REGISTER_SIM_SUBSCRIPTION</pre>   | Register sim subscription |
| <code>11948</code> | <pre>REGISTER_WINDOW_MANAGER_LISTENERS</pre>   | Register window manager listeners |
| <code>11949</code> | <pre>REMOTE_AUDIO_PLAYBACK</pre>   | Remote audio playback |
| <code>11950</code> | <pre>REMOVE_DRM_CERTIFICATES</pre>   | Remove drm certificates |
| <code>11951</code> | <pre>REMOVE_TASKS</pre>   | Remove tasks |
| <code>11952</code> | <pre>REORDER_TASKS</pre>   | Reorder tasks |
| <code>11953</code> | <pre>REQUEST_IGNORE_BATTERY_OPTIMIZATIONS</pre>   | Request ignore battery optimizations |
| <code>11954</code> | <pre>REQUEST_INSTALL_PACKAGES</pre>   | Request install packages |
| <code>11955</code> | <pre>RESET_FINGERPRINT_LOCKOUT</pre>   | Reset fingerprint lockout |
| <code>11956</code> | <pre>RESET_SHORTCUT_MANAGER_THROTTLING</pre>   | Reset shortcut manager throttling |
| <code>11957</code> | <pre>RESTART_PACKAGES</pre>   | Restart packages |
| <code>11958</code> | <pre>RETRIEVE_WINDOW_CONTENT</pre>   | Retrieve window content |
| <code>11959</code> | <pre>RETRIEVE_WINDOW_TOKEN</pre>   | Retrieve window token |
| <code>11960</code> | <pre>REVOKE_RUNTIME_PERMISSIONS</pre>   | Revoke runtime permissions |
| <code>11961</code> | <pre>SCORE_NETWORKS</pre>   | Score networks |
| <code>11962</code> | <pre>SEND_CALL_LOG_CHANGE</pre>   | Send call log change |
| <code>11963</code> | <pre>SEND_DOWNLOAD_COMPLETED_INTENTS</pre>   | Send download completed intents |
| <code>11964</code> | <pre>SEND_RESPOND_VIA_MESSAGE</pre>   | Send respond via message |
| <code>11965</code> | <pre>SEND_SMS_NO_CONFIRMATION</pre>   | Send sms no confirmation |
| <code>11966</code> | <pre>SERIAL_PORT</pre>   | Serial port |
| <code>11967</code> | <pre>SET_ACTIVITY_WATCHER</pre>   | Set activity watcher |
| <code>11968</code> | <pre>SET_ALWAYS_FINISH</pre>   | Set always finish |
| <code>11969</code> | <pre>SET_ANIMATION_SCALE</pre>   | Set animation scale |
| <code>11970</code> | <pre>SET_DEBUG_APP</pre>   | Set debug app |
| <code>11971</code> | <pre>SET_INPUT_CALIBRATION</pre>   | Set input calibration |
| <code>11972</code> | <pre>SET_KEYBOARD_LAYOUT</pre>   | Set keyboard layout |
| <code>11973</code> | <pre>SET_ORIENTATION</pre>   | Set orientation |
| <code>11974</code> | <pre>SET_POINTER_SPEED</pre>   | Set pointer speed |
| <code>11975</code> | <pre>SET_PREFERRED_APPLICATIONS</pre>   | Set preferred applications |
| <code>11976</code> | <pre>SET_PROCESS_LIMIT</pre>   | Set process limit |
| <code>11977</code> | <pre>SET_SCREEN_COMPATIBILITY</pre>   | Set screen compatibility |
| <code>11978</code> | <pre>SET_TIME</pre>   | Set time |
| <code>11979</code> | <pre>SET_TIME_ZONE</pre>   | Set time zone |
| <code>11980</code> | <pre>SET_WALLPAPER</pre>   | Set wallpaper |
| <code>11981</code> | <pre>SET_WALLPAPER_COMPONENT</pre>   | Set wallpaper component |
| <code>11982</code> | <pre>SET_WALLPAPER_HINTS</pre>   | Set wallpaper hints |
| <code>11983</code> | <pre>SHUTDOWN</pre>   | Shutdown |
| <code>11984</code> | <pre>SIGNAL_PERSISTENT_PROCESSES</pre>   | Signal persistent processes |
| <code>11985</code> | <pre>START_ANY_ACTIVITY</pre>   | Start any activity |
| <code>11986</code> | <pre>START_PRINT_SERVICE_CONFIG_ACTIVITY</pre>   | Start print service config activity |
| <code>11987</code> | <pre>START_TASKS_FROM_RECENTS</pre>   | Start tasks from recents |
| <code>11988</code> | <pre>STATUS_BAR</pre>   | Status bar |
| <code>11989</code> | <pre>STATUS_BAR_SERVICE</pre>   | Status bar service |
| <code>11990</code> | <pre>STOP_APP_SWITCHES</pre>   | Stop app switches |
| <code>11991</code> | <pre>STORAGE_INTERNAL</pre>   | Storage internal |
| <code>11992</code> | <pre>SUBSCRIBED_FEEDS_READ</pre>   | Subscribed feeds read |
| <code>11993</code> | <pre>SUBSCRIBED_FEEDS_WRITE</pre>   | Subscribed feeds write |
| <code>11994</code> | <pre>SUBSTITUTE_NOTIFICATION_APP_NAME</pre>   | Substitute notification app name |
| <code>11995</code> | <pre>SYSTEM_ALERT_WINDOW</pre>   | System alert window |
| <code>11996</code> | <pre>TABLET_MODE</pre>   | Tablet mode |
| <code>11997</code> | <pre>TEMPORARY_ENABLE_ACCESSIBILITY</pre>   | Temporary enable accessibility |
| <code>11998</code> | <pre>TETHER_PRIVILEGED</pre>   | Tether privileged |
| <code>11999</code> | <pre>TRANSMIT_IR</pre>   | Transmit ir |
| <code>12000</code> | <pre>TRUST_LISTENER</pre>   | Trust listener |
| <code>12001</code> | <pre>TV_INPUT_HARDWARE</pre>   | Tv input hardware |
| <code>12002</code> | <pre>TV_VIRTUAL_REMOTE_CONTROLLER</pre>   | Tv virtual remote controller |
| <code>12003</code> | <pre>UPDATE_APP_OPS_STATS</pre>   | Update app ops stats |
| <code>12004</code> | <pre>UPDATE_CONFIG</pre>   | Update config |
| <code>12005</code> | <pre>UPDATE_DEVICE_STATS</pre>   | Update device stats |
| <code>12006</code> | <pre>UPDATE_LOCK</pre>   | Update lock |
| <code>12007</code> | <pre>UPDATE_LOCK_TASK_PACKAGES</pre>   | Update lock task packages |
| <code>12008</code> | <pre>USER_ACTIVITY</pre>   | User activity |
| <code>12009</code> | <pre>USE_CREDENTIALS</pre>   | Use credentials |
| <code>12010</code> | <pre>VIBRATE</pre>   | Vibrate |
| <code>12011</code> | <pre>WAKE_LOCK</pre>   | Wake lock |
| <code>12012</code> | <pre>WRITE_APN_SETTINGS</pre>   | Write apn settings |
| <code>12013</code> | <pre>WRITE_BLOCKED_NUMBERS</pre>   | Write blocked numbers |
| <code>12014</code> | <pre>WRITE_DREAM_STATE</pre>   | Write dream state |
| <code>12015</code> | <pre>WRITE_GSERVICES</pre>   | Write gservices |
| <code>12016</code> | <pre>WRITE_MEDIA_STORAGE</pre>   | Write media storage |
| <code>12017</code> | <pre>WRITE_PROFILE</pre>   | Write profile |
| <code>12018</code> | <pre>WRITE_SECURE_SETTINGS</pre>   | Write secure settings |
| <code>12019</code> | <pre>WRITE_SETTINGS</pre>   | Write settings |
| <code>12020</code> | <pre>WRITE_SMS</pre>   | Write sms |
| <code>12021</code> | <pre>WRITE_SOCIAL_STREAM</pre>   | Write social stream |
| <code>12022</code> | <pre>WRITE_SYNC_SETTINGS</pre>   | Write sync settings |
| <code>12023</code> | <pre>WRITE_USER_DICTIONARY</pre>   | Write user dictionary |

### OS Codes
| CODE               | CONSTANT            | DESCRIPTION                                         |
|--------------------|---------------------|-----------------------------------------------------|
| <code>12100</code> | <pre>AIX</pre>   | AIX.     |
| <code>12101</code> | <pre>ANDROID</pre>   | ANDROID.     |
| <code>12102</code> | <pre>AMIGA_OS</pre>   | AMIGA OS.     |
| <code>12103</code> | <pre>TV_OS</pre>   | TV OS.     |
| <code>12104</code> | <pre>ARCH_LINUX</pre>   | ARCH LINUX.     |
| <code>12105</code> | <pre>BACK_TRACK</pre>   | BACK TRACK.     |
| <code>12106</code> | <pre>BADA</pre>   | BADA.     |
| <code>12107</code> | <pre>BE_OS</pre>   | BE OS.     |
| <code>12108</code> | <pre>BLACK_BERRY_OS</pre>   | BLACK BERRY OS.     |
| <code>12109</code> | <pre>BLACK_BERRY_TABLET_OS</pre>   | BLACK BERRY TABLET OS.     |
| <code>12110</code> | <pre>CAIXA_MAGICA</pre>   | CAIXA MAGICA.     |
| <code>12111</code> | <pre>CENT_OS</pre>   | CENT OS.     |
| <code>12112</code> | <pre>CHROME_OS</pre>   | CHROME OS.     |
| <code>12113</code> | <pre>CYANOGEN_MOD</pre>   | CYANOGEN MOD.     |
| <code>12114</code> | <pre>DEBIAN</pre>   | DEBIAN.     |
| <code>12115</code> | <pre>DEEPIN</pre>   | DEEPIN.     |
| <code>12116</code> | <pre>DRAGON_FLY</pre>   | DRAGON FLY.     |
| <code>12117</code> | <pre>FEDORA</pre>   | FEDORA.     |
| <code>12118</code> | <pre>FIREFOX_OS</pre>   | FIREFOX OS.     |
| <code>12119</code> | <pre>FIRE_OS</pre>   | FIRE OS.     |
| <code>12120</code> | <pre>FREE_BSD</pre>   | FREE BSD.     |
| <code>12121</code> | <pre>FYDE_OS</pre>   | FYDE OS.     |
| <code>12122</code> | <pre>GENTOO</pre>   | GENTOO.     |
| <code>12123</code> | <pre>GOOGLE_TV</pre>   | GOOGLE TV.     |
| <code>12124</code> | <pre>HP_UX</pre>   | HP UX.     |
| <code>12125</code> | <pre>HAIKU_OS</pre>   | HAIKU OS.     |
| <code>12126</code> | <pre>IPAD_OS</pre>   | IPAD OS.     |
| <code>12127</code> | <pre>HARMONY_OS</pre>   | HARMONY OS.     |
| <code>12128</code> | <pre>KAI_OS</pre>   | KAI OS.     |
| <code>12129</code> | <pre>KNOPPIX</pre>   | KNOPPIX.     |
| <code>12130</code> | <pre>KUBUNTU</pre>   | KUBUNTU.     |
| <code>12131</code> | <pre>GNU_LINUX</pre>   | GNU LINUX.     |
| <code>12132</code> | <pre>LUBUNTU</pre>   | LUBUNTU.     |
| <code>12133</code> | <pre>MAC</pre>   | MAC.     |
| <code>12134</code> | <pre>MAEMO</pre>   | MAEMO.     |
| <code>12135</code> | <pre>MAGEIA</pre>   | MAGEIA.     |
| <code>12136</code> | <pre>MANDRIVA</pre>   | MANDRIVA.     |
| <code>12137</code> | <pre>MEE_GO</pre>   | MEE GO.     |
| <code>12138</code> | <pre>MINT</pre>   | MINT.     |
| <code>12139</code> | <pre>MORPH_OS</pre>   | MORPH OS.     |
| <code>12140</code> | <pre>NET_BSD</pre>   | NET BSD.     |
| <code>12141</code> | <pre>NINTENDO</pre>   | NINTENDO.     |
| <code>12142</code> | <pre>NINTENDO_MOBILE</pre>   | NINTENDO MOBILE.     |
| <code>12143</code> | <pre>OS_2</pre>   | OS 2.     |
| <code>12144</code> | <pre>OPEN_BSD</pre>   | OPEN BSD.     |
| <code>12145</code> | <pre>OPEN_WRT</pre>   | OPEN WRT.     |
| <code>12146</code> | <pre>PC_LINUX_OS</pre>   | PC LINUX OS.     |
| <code>12147</code> | <pre>PLAY_STATION_PORTABLE</pre>   | PLAY STATION PORTABLE.     |
| <code>12148</code> | <pre>PLAY_STATION</pre>   | PLAY STATION.     |
| <code>12149</code> | <pre>RED_HAT</pre>   | RED HAT.     |
| <code>12150</code> | <pre>RISC_OS</pre>   | RISC OS.     |
| <code>12151</code> | <pre>ROKU_OS</pre>   | ROKU OS.     |
| <code>12152</code> | <pre>ROSA</pre>   | ROSA.     |
| <code>12153</code> | <pre>REMIX_OS</pre>   | REMIX OS.     |
| <code>12154</code> | <pre>REX</pre>   | REX.     |
| <code>12155</code> | <pre>SABAYON</pre>   | SABAYON.     |
| <code>12156</code> | <pre>SUSE</pre>   | SUSE.     |
| <code>12157</code> | <pre>SAILFISH_OS</pre>   | SAILFISH OS.     |
| <code>12158</code> | <pre>SLACKWARE</pre>   | SLACKWARE.     |
| <code>12159</code> | <pre>SOLARIS</pre>   | SOLARIS.     |
| <code>12160</code> | <pre>SYLLABLE</pre>   | SYLLABLE.     |
| <code>12161</code> | <pre>SYMBIAN</pre>   | SYMBIAN.     |
| <code>12162</code> | <pre>SYMBIAN_OS</pre>   | SYMBIAN OS.     |
| <code>12163</code> | <pre>SYMBIAN_OS_SERIES40</pre>   | SYMBIAN OS SERIES40.     |
| <code>12164</code> | <pre>SYMBIAN_OS_SERIES60</pre>   | SYMBIAN OS SERIES60.     |
| <code>12165</code> | <pre>SYMBIAN_3</pre>   | SYMBIAN 3.     |
| <code>12166</code> | <pre>THREAD_X</pre>   | THREAD X.     |
| <code>12167</code> | <pre>TIZEN</pre>   | TIZEN.     |
| <code>12168</code> | <pre>UBUNTU</pre>   | UBUNTU.     |
| <code>12169</code> | <pre>WATCH_OS</pre>   | WATCH OS.     |
| <code>12170</code> | <pre>WHALE_OS</pre>   | WHALE OS.     |
| <code>12171</code> | <pre>WINDOWS</pre>   | WINDOWS.     |
| <code>12172</code> | <pre>WINDOWS_CE</pre>   | WINDOWS CE.     |
| <code>12173</code> | <pre>WINDOWS_IOT</pre>   | WINDOWS IOT.     |
| <code>12174</code> | <pre>WINDOWS_MOBILE</pre>   | WINDOWS MOBILE.     |
| <code>12175</code> | <pre>WINDOWS_PHONE</pre>   | WINDOWS PHONE.     |
| <code>12176</code> | <pre>WINDOWS_RT</pre>   | WINDOWS RT.     |
| <code>12177</code> | <pre>XBOX</pre>   | XBOX.     |
| <code>12178</code> | <pre>XUBUNTU</pre>   | XUBUNTU.     |
| <code>12179</code> | <pre>YUN_OS</pre>   | YUN OS.     |
| <code>12180</code> | <pre>IOS</pre>   | IOS.     |
| <code>12181</code> | <pre>PALM_OS</pre>   | PALM OS.     |
| <code>12182</code> | <pre>WEB_OS</pre>   | WEB OS.     |