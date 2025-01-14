// prettier-ignore
export namespace DouyinMedia {
  export type MediaRoot = {
      rawAdData?:               null;
      packAdDate:               null;
      isAds?:                   boolean;
      logPb?:                   string;
      awemeId:                  string;
      awemeType:                number;
      groupId:                  string;
      cooperationInfo:          CooperationInfo;
      chapterInfo:              ChapterInfo;
      authorInfo:               AuthorInfo;
      awemeControl:             AwemeControl;
      danmakuControl:           DanmakuControl;
      desc:                     string;
      authorUserId:             number | string;
      authenticationToken?:     string;
      mediaType?:               number;
      createTime:               number;
      textExtra:                TextExtra[];
      userDigged:               boolean;
      userCollected:            boolean;
      video:                    DouyinPlayerVideo;
      mixInfo:                  MixInfo;
      seriesInfo:               SeriesInfo;
      isPrivate:                boolean;
      isFriendLimit:            boolean;
      download:                 Download;
      impressionData:           string;
      fakeHorizontalInfo:       CooperationInfo;
      feedFlowControllerInfo:   CooperationInfo;
      tag:                      Tag;
      stroyInfo:                StroyInfo;
      stats:                    Stats;
      shareInfo:                ShareInfo;
      status:                   Status;
      webRawData:               WebRawData;
      wallpaperTagInfo:         null;
      music:                    Music;
      images:                   Image[];
      imageInfos:               string;
      imageAlbumMusicInfo:      ImageAlbumMusicInfo;
      imgBitrate:               any[];
      suggestWords:             SuggestWord[];
      seoInfo:                  SEOInfo;
      requestTime:              number;
      lvideoBrief:              CooperationInfo;
      relatedVideo:             RelatedVideo;
      varietyVideo:             CooperationInfo;
      fetchExpired:             number;
      dyQ:                      number | string;
      videoTag?:                VideoTag[];
      poiInfo:                  CooperationInfo;
      riskInfos?:               RiskInfos;
      entertainmentProductInfo: EntertainmentProductInfo;
      hotList?:                 DouyinPlayerHotList;
      isSlides?:                boolean;
      libfinsertTaskId?:        string;
      playProgress?:            PlayProgress;
      rate?:                    number;
      searchLogParams?:         SearchLogParams;
      docId?:                   string;
  }

  export type AuthorInfo = {
      uid:                    string;
      isAdFake?:              boolean;
      secUid:                 string;
      nickname:               string;
      remarkName?:            string;
      avatarUri:              string;
      followStatus:           number;
      followerStatus:         number;
      enterpriseVerifyReason: string;
      customVerify:           string;
      roomData:               CooperationInfo;
      avatarThumb:            AvatarThumb;
      roleTitle:              string;
      secret:                 number;
      roomId?:                number;
      accountCertInfo:        CooperationInfo;
      followerCount?:         number;
      totalFavorited?:        number;
      roomIdStr?:             string;
      url?:                   string;
  }

  export type CooperationInfo = {
  }

  export type AvatarThumb = {
      height:  number;
      width:   number;
      uri:     string;
      urlList: string[];
      urlKey?: string;
  }

  export type AwemeControl = {
      canComment?:     boolean;
      canForward?:     boolean;
      canShare?:       boolean;
      canShowComment?: boolean;
  }

  export type ChapterInfo = {
      status: boolean;
      list:   null;
  }

  export type DanmakuControl = {
      enableDanmaku?:      boolean;
      isPostDenied?:       boolean;
      postDeniedReason?:   string;
      postPrivilegeLevel?: number;
  }

  export type Download = {
      prevent?:      boolean;
      allowDownload: boolean;
  }

  export type EntertainmentProductInfo = {
      biz?:        number;
      market_info: MarketInfo;
      sub_title?:  null;
  }

  export type MarketInfo = {
      limit_free:     LimitFree;
      marketing_tag?: null;
  }

  export type LimitFree = {
      in_free: boolean;
  }

  export type DouyinPlayerHotList = {
      hotTitle:    string;
      extra:       string;
      footer:      string;
      header:      string;
      i18nTitle:   string;
      imageUrl:    string;
      patternType: number;
      schema:      string;
      sentence:    string;
      sentenceId:  number;
      title:       string;
      type:        number;
      hotScore:    number;
      groupId:     string;
      rank:        number;
      viewCount:   number;
  }

  export type ImageAlbumMusicInfo = {
      beginTime?: number;
      endTime?:   number;
      volume?:    number;
  }

  export type Image = {
      width:           number;
      height:          number;
      uri:             string;
      urlList:         string[];
      downloadUrlList: string[];
      video:           ImageVideo | null;
  }

  export type ImageVideo = {
      width:              number;
      height:             number;
      ratio:              string;
      duration:           number;
      dataSize:           number;
      uri:                string;
      playAddr:           PlayAddr[];
      playAddrSize:       number;
      playAddrFileHash:   string;
      playApi:            string;
      playAddrH265:       any[];
      playApiH265:        string;
      bitRateList:        PurpleBitRateList[];
      bitRateAudioList:   any[];
      cover:              string;
      coverUrlList:       string[];
      coverUri:           string;
      originCover:        string;
      rawCover:           string;
      originCoverUrlList: any[];
      meta:               PurpleMeta;
      bigThumbs:          any[];
      videoModel:         null;
  }

  export type PurpleBitRateList = {
      uri:             string;
      dataSize:        number;
      width:           number;
      height:          number;
      playAddr:        PlayAddr[];
      playApi:         string;
      isH265:          number;
      qualityType:     number;
      bitRate:         number;
      videoFormat:     Format;
      gearName:        string;
      fps:             number;
      playerAccessKey: string;
      featureId:       string;
      format:          Format;
      fileId:          string;
      pktOffsetMap:    PktOffsetMap[];
      realBitrate:     number;
      mvmaf:           CooperationInfo;
      ufq:             CooperationInfo;
  }

  export type Format = "mp4";

  export type PktOffsetMap = {
      time:   number;
      offset: number;
  }

  export type PlayAddr = {
      src: string;
  }

  export type PurpleMeta = {
      enable_manual_ladder: string;
      format:               Format;
      gear_vqm:             string;
      hrids:                string;
      is_spatial_video:     string;
      isad:                 string;
      qprf:                 string;
      sdgs:                 string;
      sr_score:             string;
      strategy_tokens:      string;
      vqs_origin:           string;
  }

  export type MixInfo = {
      cover:             string;
      status:            number;
      hasUpdatedEpisode: number;
      isCollected:       number;
      author:            Author;
      chargeInfo:        CooperationInfo;
  }

  export type Author = {
      uid:         string;
      secret:      number;
      isBlockedV2: boolean;
      userNotSee:  number;
      nickname?:   string;
  }

  export type Music = {
      id:                number | string;
      idStr:             string;
      mid:               string;
      author:            string;
      title:             string;
      coverThumb:        AvatarThumb;
      coverMedium:       AvatarThumb;
      playUrl:           AvatarThumb;
      secUid:            string;
      shareInfo:         CooperationInfo;
      extra:             Extra;
      album:             string;
      avatarThumb:       AvatarThumb;
      ownerNickname:     string;
      collectStat:       number;
      bindedChallengeId: number;
      status:            number;
      canNotPlay:        boolean;
      musicName:         string;
      isOriginal:        boolean;
      duration:          number;
      userCount:         number;
  }

  export type Extra = {
      hasEdited: number;
  }

  export type PlayProgress = {
      last_modified_time: number;
      play_progress:      number;
  }

  export type RelatedVideo = {
      extra: CooperationInfo;
  }

  export type RiskInfos = {
      content:   string;
      risk_sink: boolean;
      type:      number;
      vote:      boolean;
      warn:      boolean;
  }

  export type SearchLogParams = {
      log_pb:           LogPb;
      search_type:      string;
      impr_id:          string;
      search_id:        string;
      search_keyword:   string;
      column_type:      string;
      search_result_id: string;
      enter_from:       string;
  }

  export type LogPb = {
      impr_id: string;
  }

  export type SEOInfo = {
      expFields:   CooperationInfo;
      ocrContent?: string;
  }

  export type SeriesInfo = {
      cover:             string;
      horizontalCover:   string;
      status:            number;
      hasUpdatedEpisode: number;
      isCollected:       number;
      author:            Author;
      isCharge:          boolean;
      isIaa:             boolean;
      stats:             CooperationInfo;
      chargeInfo:        CooperationInfo;
  }

  export type ShareInfo = {
      shareUrl:      string;
      shareLinkDesc: string;
  }

  export type Stats = {
      commentCount:   number;
      diggCount:      number;
      shareCount:     number;
      playCount:      number;
      collectCount:   number;
      downloadCount:  number;
      forwardCount:   number;
      liveWatchCount: number;
  }

  export type Status = {
      allowShare:    boolean;
      isReviewing:   boolean;
      isDelete:      boolean;
      isProhibited:  boolean;
      privateStatus: number;
      partSee:       number;
      videoMute:     VideoMute;
      reviewResult:  ReviewResult;
      reviewStatus?: number;
  }

  export type ReviewResult = {
      reviewStatus?: number;
  }

  export type VideoMute = {
      isMute:   boolean;
      muteDesc: string;
  }

  export type StroyInfo = {
      shareFrom:   string;
      isSharePost: boolean;
  }

  export type SuggestWord = {
      scene:    string;
      words:    Word[];
      hintText: string;
      iconUrl:  string;
  }

  export type Word = {
      word:   string;
      wordId: string;
      info:   string;
  }

  export type Tag = {
      isTop:          boolean;
      relationLabels: boolean;
      isStory:        boolean;
      inReviewing:    boolean;
      labelPartSee:   number;
      hotList?:       TagHotList;
      reviewStatus?:  number;
  }

  export type TagHotList = {
      extra:        string;
      footer:       string;
      group_id:     string;
      header:       string;
      hot_score:    number;
      i18n_title:   string;
      image_url:    string;
      pattern_type: number;
      rank:         number;
      schema:       string;
      sentence:     string;
      sentence_id:  number;
      title:        string;
      type:         number;
      view_count:   number;
  }

  export type TextExtra = {
      start:           number;
      end:             number;
      type:            number;
      hashtagId:       string;
      hashtagName:     string;
      secUid:          string;
      awemeId:         string;
      userId:          string;
      isCommerce:      boolean;
      searchHideWords: number;
      searchQueryId:   string;
      searchRank:      number;
      searchText:      string;
  }

  export type DouyinPlayerVideo = {
      width:                 number;
      height:                number;
      ratio:                 string;
      duration:              number;
      dataSize?:             number;
      uri:                   string;
      playAddr:              PlayAddr[];
      playAddrSize?:         number;
      playAddrFileHash?:     string;
      playApi:               string;
      playAddrH265:          PlayAddr[];
      playAddrH265Size?:     number;
      playAddrH265FileHash?: string;
      playApiH265:           string;
      bitRateList:           FluffyBitRateList[];
      bitRateAudioList:      any[];
      cover:                 string;
      coverUrlList:          string[];
      coverUri:              string;
      dynamicCover?:         string;
      originCover:           string;
      rawCover:              string;
      originCoverUrlList:    string[];
      gaussianCover?:        string;
      meta:                  FluffyMeta;
      bigThumbs:             any[] | null;
      videoModel:            null;
      url?:                  string;
  }

  export type FluffyBitRateList = {
      uri:             URI;
      dataSize:        number;
      width:           number;
      height:          number;
      playAddr:        PlayAddr[];
      playApi:         string;
      isH265:          number;
      qualityType:     number;
      bitRate:         number;
      videoFormat:     Format;
      gearName:        string;
      fps:             number;
      playerAccessKey: string;
      featureId:       string;
      format:          Format;
      fileId:          string;
      pktOffsetMap:    PktOffsetMap[];
      realBitrate:     number;
      mvmaf:           { [key: string]: number };
      ufq:             Ufq;
  }

  export type Ufq = {
      enh?:      number;
      playback?: Playback;
      src?:      number;
      trans?:    number;
      version?:  Version;
  }

  export type Playback = {
      ori:  number;
      srv1: number;
  }

  export type Version = "v1.2";

  export type URI = string;

  export type FluffyMeta = {
      bright_ratio_mean?:       string;
      brightness_mean?:         string;
      diff_overexposure_ratio?: string;
      enable_manual_ladder?:    string;
      format?:                  Format;
      gear_vqm?:                string;
      hrids?:                   string;
      is_spatial_video?:        string;
      isad?:                    string;
      loudness?:                string;
      overexposure_ratio_mean?: string;
      peak?:                    string;
      qprf?:                    string;
      r_1?:                     string;
      r_10?:                    string;
      r_11?:                    string;
      r_2?:                     string;
      r_3?:                     string;
      r_4?:                     string;
      r_6?:                     string;
      r_7?:                     string;
      r_8?:                     string;
      r_9?:                     string;
      sdgs?:                    string;
      sr_potential?:            string;
      sr_score?:                string;
      std_brightness?:          string;
      strategy_tokens?:         string;
      title_info?:              string;
      volume_info?:             string;
      vqs_origin?:              string;
  }

  export type VideoTag = {
      level:   number;
      tagId:   number;
      tagName: string;
  }

  export type WebRawData = {
      oftenWatchInfo: OftenWatchInfo;
      videoImageInfo: CooperationInfo;
      CTR:            Ctr;
      brandAd:        BrandAd;
      insertInfo:     InsertInfo | null;
      recomPhrase?:   string;
      cutTitle?:      string;
  }

  export type Ctr = {
      recommendScore: RecommendScore;
  }

  export type RecommendScore = {
      showMix:           number;
      showSeries:        number;
      showHot:           number;
      showRelateSearch:  number;
      showRelateVideo?:  number;
      showAuthorRelated: number;
      relateAiTag?:      string;
  }

  export type BrandAd = {
      biz_content?: CooperationInfo;
  }

  export type InsertInfo = {
      is_ad: boolean;
  }

  export type OftenWatchInfo = {
      yellowPoint?: boolean;
  }

}

// prettier-ignore
export namespace DouyinPlayer {
  export type PlayerInstance = {
      vtype:                       string;
      bizType:                     number;
      videoConfig:                 PlayerInstanceVideoConfig;
      video:                       string;
      videoEventMiddleware:        DyLogStat;
      config:                      PlayerInstanceConfig;
      userTimer:                   number;
      waitTimer:                   null;
      isReady:                     boolean;
      isPlaying:                   boolean;
      isError:                     boolean;
      isSeeking:                   boolean;
      isCanplay:                   boolean;
      rotateDeg:                   number;
      isActive:                    boolean;
      isBufferControlPaused:       boolean;
      isCssfullScreen:             boolean;
      fullscreen:                  boolean;
      curDefinition:               CurDefinition;
      videoPos:                    VideoPos;
      sizeInfo:                    SizeInfo;
      innerContainer:              string;
      controls:                    Controls;
      topBar:                      string;
      root:                        string;
      database:                    Database;
      isUserActive:                boolean;
      innerStates:                 InnerStates;
      instManager:                 DyLogStat;
      leftBar:                     string;
      rightBar:                    string;
      vodLogger:                   VODLogger;
      dyLogStat:                   DyLogStat;
      loadstart:                   number;
      firstfame:                   number;
      equalizeVolumeState:         string;
      volumeBalanceState:          number;
      preloadActive:               boolean;
      isInstNext:                  boolean;
      isMultiple:                  number;
      upperCount:                  number;
      lowerCount:                  number;
      abrCount:                    number;
      abrChangeCount:              number;
      upperAbrChangeCount:         number;
      lowerAbrChangeCount:         number;
      loadeddata:                  number;
      bufferedBeforeActive:        number;
      loadstartBeforeActive:       number;
      loadeddataBeforeActive:      number;
      preplay:                     number;
      preplayStat:                 number;
      effectNodeConsumeTime:       EffectNodeConsumeTime;
      lufs:                        number;
      useMammonWorkletProcessorV3: boolean;
      hitMammonWorkletProcessorV3: boolean;
      replayed:                    boolean;
      errored:                     number;
      removedBuffer:               number;
      prepauseStat:                number;
      superResolution:             DyLogStat;
      bandWidth:                   null;
  }

  export type PlayerInstanceConfig = {
      id:                        string;
      el:                        string;
      url:                       URL[];
      domEventType:              string;
      nullUrlStart:              boolean;
      width:                     string;
      height:                    string;
      fluid:                     boolean;
      fitVideoSize:              string;
      videoFillMode:             string;
      volume:                    Volume;
      autoplay:                  boolean;
      autoplayMuted:             boolean;
      loop:                      boolean;
      isLive:                    boolean;
      zoom:                      number;
      videoInit:                 boolean;
      poster:                    string;
      isMobileSimulateMode:      boolean;
      defaultPlaybackRate:       number;
      execBeforePluginsCall:     null;
      allowSeekAfterEnded:       boolean;
      enableContextmenu:         boolean;
      closeVideoClick:           boolean;
      closeVideoDblclick:        boolean;
      closePlayerBlur:           boolean;
      closeDelayBlur:            boolean;
      leavePlayerTime:           number;
      closePlayVideoFocus:       boolean;
      closePauseVideoFocus:      boolean;
      closeFocusVideoFocus:      boolean;
      closeControlsBlur:         boolean;
      topBarAutoHide:            boolean;
      videoAttributes:           DyLogStat;
      startTime:                 number;
      seekedStatus:              string;
      miniprogress:              boolean;
      ignores:                   string[];
      whitelist:                 any[];
      inactive:                  number;
      lang:                      string;
      controls:                  Con;
      marginControls:            boolean;
      fullscreenTarget:          string;
      screenShot:                boolean;
      rotate:                    boolean;
      pip:                       boolean;
      download:                  boolean;
      mini:                      boolean;
      cssFullscreen:             boolean;
      keyShortcut:               boolean;
      presets:                   null[];
      plugins:                   null[];
      playbackRate:              boolean;
      definition:                Definition;
      playsinline:               boolean;
      customDuration:            number;
      timeOffset:                number;
      icons:                     Icons;
      i18n:                      I18N[];
      tabindex:                  number;
      thumbnail:                 null;
      videoConfig:               ConfigVideoConfig;
      isHideTips:                boolean;
      minWaitDelay:              number;
      commonStyle:               CommonStyle;
      isModal:                   boolean;
      closeVideoPreventDefault:  boolean;
      closeVideoStopPropagation: boolean;
      awemeType:                 number;
      dynamicBg:                 DynamicBg;
      enter:                     Enter;
      start:                     Start;
      progresspreview:           Progresspreview;
      progress:                  boolean;
      miniscreen:                SizeInfo;
      vodLogOpts:                VODLogOpts;
      BitrateSelector:           BitrateSelector;
      keyboard:                  Keyboard;
      vtype:                     string;
      TestSpeed:                 TestSpeed;
      mobile:                    Mobile;
      fpsdetect:                 Fpsdetect;
      awemeInfo:                 AwemeInfo;
      size:                      number;
      uri:                       string;
      vid:                       string;
      authorId:                  string;
      videoWidth:                number;
      videHeight:                number;
      defaultDefinition:         number;
      defaultBitrate:            string;
      duration:                  number;
      bizType:                   number;
      bitrate:                   number;
      codecType:                 string;
      mediaType:                 string;
      focusUserDefinition:       boolean;
      DASHPlugin:                DASHPlugin;
      downgradeUrl:              string;
      enableSr:                  boolean;
      progressDot:               any[];
      notUseRefreshVid:          null;
  }

  export type BitrateSelector = {
      paramBf:                      number;
      paramBp:                      number;
      paramUpper:                   number;
      paramLower:                   number;
      paramUpperBl:                 number;
      paramVl1:                     number;
      paramVl2:                     number;
      paramVlUpper:                 number;
      paramVlLower:                 number;
      bitrateUpper:                 number;
      bitrateLower:                 number;
      slidingWindowType:            string;
      slidingWindowWeight:          string;
      slidingWindowWeightThreshold: number;
      slidingWindowCountThreshold:  number;
      slidingWindowExtraction:      string;
      bitrateRange:                 number[];
      mode:                         string;
      quality_filter:               QualityFilter;
      white_list:                   string[];
      bitrateKey:                   string;
      overscore:                    Overscore;
  }

  export type Overscore = {
      isOpen:     boolean;
      type:       string;
      filterKey:  string;
      filterList: FilterList[];
      enable266:  boolean;
  }

  export type FilterList = {
      source: number;
      target: number[];
  }

  export type QualityFilter = {
      normal_1080_0:       AdaptLowest1080_1;
      adapt_lowest_1080_1: AdaptLowest1080_1;
      adapt_lowest_720_1:  AdaptLowest1080_1;
  }

  export type AdaptLowest1080_1 = {
      lower: number;
      upper: number;
  }

  export type DASHPlugin = {
      minBufferLength:              number;
      maxBufferLength:              number;
      defaultFormat:                string;
      dashOpts:                     DyLogStat;
      smallGapLimit:                number;
      playInfoType:                 string;
      disableBufferBreakCheck:      boolean;
      waitingTimeOut:               number;
      tickInSeconds:                number;
      needAutoBitrate:              boolean;
      disableCanplayCheck:          boolean;
      loadFirstGopData:             boolean;
      useGopCacheAcc:               boolean;
      autoBitrateOpts:              AutoBitrateOpts;
      pcdnConfig:                   PcdnConfig;
      open:                         boolean;
      openAdaptRange:               boolean;
      timeout:                      number;
      removeBufferLen:              number;
      removeBufferWhenSeekInBuffer: boolean;
      replayReset:                  boolean;
      waitingInBufferTimeOut:       number;
      useProgressiveAppend:         boolean;
      useProgressiveAppendAll:      boolean;
      videoDuration:                number;
      usePCDNProgressiveCheck:      boolean;
      resetStateUpdrade:            boolean;
      useSeparationMode:            boolean;
      useCDNProgressiveCheck:       boolean;
      loader:                       Loader;
      dashPcdnConfig:               DashPcdnConfig;
      dashAdaptRangeConfig:         DyLogStat;
  }

  export type AutoBitrateOpts = {
      isPlayAutoDefi: boolean;
      isOpenAutoDefi: boolean;
      isClassic:      boolean;
      abrDriveMode:   number;
      algoArg:        AlgoArg;
  }

  export type AlgoArg = {
      bbaControl: boolean;
      highLevel:  number;
      lowLevel:   number;
  }

  export type DyLogStat = {
  }

  export type DashPcdnConfig = {
      adaptPCDNConfig: DashPcdnConfigAdaptPCDNConfig;
      openPCDN:        boolean;
  }

  export type DashPcdnConfigAdaptPCDNConfig = {
      PCDNBufferControl: boolean;
  }

  export type Loader = {
      enableDynamicMinLen: boolean;
      loaderCount:         number;
      onProcessMinLen:     number;
  }

  export type PcdnConfig = {
      openPCDN:        boolean;
      enterMinBuffer:  number;
      outMaxBuffer:    number;
      minDuration:     number;
      openPreloadPCDN: boolean;
      withReferer:     number;
      adaptPCDNConfig: PcdnConfigAdaptPCDNConfig;
      trackerUrl:      string;
      app_id:          number;
      sid:             number;
  }

  export type PcdnConfigAdaptPCDNConfig = {
      PCDNBufferControl: boolean;
      PCDNCntControl:    boolean;
      alpha:             number;
      estPTcontrol:      boolean;
      estPlayTime:       number;
      maxPCDNInBuffer:   number;
      maxPCDNOutBuffer:  number;
      minBandwidth:      number;
      minPCDNInBuffer:   number;
      minPCDNOutBuffer:  number;
      safePCDNInFactor:  number;
      safePCDNOutFactor: number;
  }

  export type TestSpeed = {
      url:              string;
      openSpeed:        boolean;
      testCnt:          number;
      addSpeedTypeList: string[];
      loadSize:         number;
      testTimeStep:     number;
  }

  export type AwemeInfo = {
      packAdDate:               null;
      awemeId:                  string;
      awemeType:                number;
      groupId:                  string;
      cooperationInfo:          DyLogStat;
      chapterInfo:              ChapterInfo;
      authorInfo:               AuthorInfo;
      awemeControl:             DyLogStat;
      danmakuControl:           DyLogStat;
      desc:                     string;
      authorUserId:             number;
      createTime:               number;
      textExtra:                TextExtra[];
      userDigged:               boolean;
      userCollected:            boolean;
      video:                    Video;
      mixInfo:                  MixInfo;
      seriesInfo:               SeriesInfo;
      isPrivate:                boolean;
      isFriendLimit:            boolean;
      download:                 Download;
      impressionData:           string;
      fakeHorizontalInfo:       DyLogStat;
      feedFlowControllerInfo:   DyLogStat;
      tag:                      Tag;
      stroyInfo:                StroyInfo;
      stats:                    Stats;
      shareInfo:                ShareInfo;
      status:                   Status;
      webRawData:               WebRawData;
      wallpaperTagInfo:         null;
      music:                    Music;
      images:                   Image[];
      imageInfos:               string;
      imageAlbumMusicInfo:      DyLogStat;
      imgBitrate:               any[];
      suggestWords:             SuggestWord[];
      seoInfo:                  SEOInfo;
      requestTime:              number;
      lvideoBrief:              DyLogStat;
      relatedVideo:             RelatedVideo;
      varietyVideo:             DyLogStat;
      fetchExpired:             number;
      dyQ:                      number;
      poiInfo:                  DyLogStat;
      entertainmentProductInfo: EntertainmentProductInfo;
      searchLogParams:          SearchLogParams;
      docId:                    string;
  }

  export type AuthorInfo = {
      uid:                    string;
      secUid:                 string;
      nickname:               string;
      avatarUri:              string;
      followerCount:          number;
      totalFavorited:         number;
      followStatus:           number;
      followerStatus:         number;
      enterpriseVerifyReason: string;
      customVerify:           string;
      roomData:               DyLogStat;
      avatarThumb:            AvatarThumb;
      roleTitle:              string;
      secret:                 number;
      roomId:                 number;
      roomIdStr:              string;
      accountCertInfo:        DyLogStat;
      url:                    string;
  }

  export type AvatarThumb = {
      height:  number;
      width:   number;
      uri:     string;
      urlList: string[];
      urlKey?: string;
  }

  export type ChapterInfo = {
      status: boolean;
      list:   null;
  }

  export type Download = {
      prevent:       boolean;
      allowDownload: boolean;
  }

  export type EntertainmentProductInfo = {
      sub_title:   null;
      market_info: MarketInfo;
      biz:         number;
  }

  export type MarketInfo = {
      limit_free:    LimitFree;
      marketing_tag: null;
  }

  export type LimitFree = {
      in_free: boolean;
  }

  export type Image = {
      width:           number;
      height:          number;
      uri:             string;
      urlList:         string[];
      downloadUrlList: string[];
      video:           null;
  }

  export type MixInfo = {
      cover:             string;
      status:            number;
      hasUpdatedEpisode: number;
      isCollected:       number;
      author:            Author;
      chargeInfo:        DyLogStat;
  }

  export type Author = {
      uid:         string;
      secret:      number;
      isBlockedV2: boolean;
      userNotSee:  number;
      nickname?:   string;
  }

  export type Music = {
      id:                number;
      idStr:             string;
      mid:               string;
      author:            string;
      title:             string;
      coverThumb:        AvatarThumb;
      coverMedium:       AvatarThumb;
      playUrl:           AvatarThumb;
      secUid:            string;
      shareInfo:         DyLogStat;
      extra:             Extra;
      album:             string;
      avatarThumb:       AvatarThumb;
      ownerNickname:     string;
      collectStat:       number;
      bindedChallengeId: number;
      status:            number;
      canNotPlay:        boolean;
      musicName:         string;
      isOriginal:        boolean;
      duration:          number;
      userCount:         number;
  }

  export type Extra = {
      hasEdited: number;
  }

  export type RelatedVideo = {
      extra: DyLogStat;
  }

  export type SearchLogParams = {
      log_pb:           LogPb;
      search_type:      string;
      impr_id:          string;
      search_id:        string;
      search_keyword:   string;
      column_type:      string;
      search_result_id: string;
      enter_from:       string;
  }

  export type LogPb = {
      impr_id: string;
  }

  export type SEOInfo = {
      expFields: DyLogStat;
  }

  export type SeriesInfo = {
      cover:             string;
      horizontalCover:   string;
      status:            number;
      hasUpdatedEpisode: number;
      isCollected:       number;
      author:            Author;
      isCharge:          boolean;
      isIaa:             boolean;
      stats:             DyLogStat;
      chargeInfo:        DyLogStat;
  }

  export type ShareInfo = {
      shareUrl:      string;
      shareLinkDesc: string;
  }

  export type Stats = {
      commentCount:   number;
      diggCount:      number;
      shareCount:     number;
      playCount:      number;
      collectCount:   number;
      downloadCount:  number;
      forwardCount:   number;
      liveWatchCount: number;
  }

  export type Status = {
      allowShare:    boolean;
      isReviewing:   boolean;
      isDelete:      boolean;
      isProhibited:  boolean;
      privateStatus: number;
      reviewStatus:  number;
      partSee:       number;
      videoMute:     VideoMute;
      reviewResult:  ReviewResult;
  }

  export type ReviewResult = {
      reviewStatus: number;
  }

  export type VideoMute = {
      isMute:   boolean;
      muteDesc: string;
  }

  export type StroyInfo = {
      shareFrom:   string;
      isSharePost: boolean;
  }

  export type SuggestWord = {
      scene:    string;
      words:    any[];
      hintText: string;
      iconUrl:  string;
  }

  export type Tag = {
      isTop:          boolean;
      relationLabels: boolean;
      isStory:        boolean;
      reviewStatus:   number;
      inReviewing:    boolean;
      labelPartSee:   number;
  }

  export type TextExtra = {
      start:           number;
      end:             number;
      type:            number;
      hashtagId:       string;
      hashtagName:     string;
      secUid:          string;
      awemeId:         string;
      userId:          string;
      isCommerce:      boolean;
      searchHideWords: number;
      searchQueryId:   string;
      searchRank:      number;
      searchText:      string;
  }

  export type Video = {
      width:              number;
      height:             number;
      ratio:              string;
      duration:           number;
      uri:                string;
      playAddr:           URL[];
      playApi:            string;
      playAddrH265:       any[];
      playApiH265:        string;
      bitRateList:        any[];
      bitRateAudioList:   any[];
      cover:              string;
      coverUrlList:       string[];
      coverUri:           string;
      originCover:        string;
      rawCover:           string;
      originCoverUrlList: string[];
      meta:               DyLogStat;
      bigThumbs:          null;
      videoModel:         null;
      url:                string;
  }

  export type URL = {
      src: string;
  }

  export type WebRawData = {
      oftenWatchInfo: DyLogStat;
      videoImageInfo: DyLogStat;
      recomPhrase:    string;
      CTR:            Ctr;
      cutTitle:       string;
      brandAd:        DyLogStat;
      insertInfo:     null;
  }

  export type Ctr = {
      recommendScore: RecommendScore;
  }

  export type RecommendScore = {
      showMix:           number;
      showSeries:        number;
      showHot:           number;
      showRelateSearch:  number;
      relateAiTag:       string;
      showAuthorRelated: number;
  }

  export type CommonStyle = {
      progressColor:  string;
      playedColor:    string;
      cachedColor:    string;
      sliderBtnStyle: DyLogStat;
      volumeColor:    string;
  }

  export type Con = {
      mode:     string;
      autoHide: boolean;
      initShow: boolean;
      disable?: boolean;
  }

  export type Definition = {
      list: any[];
  }

  export type DynamicBg = {
      disable:   boolean;
      frameRate: number;
      filter:    string;
      maskBg:    string;
  }

  export type Enter = {
      innerHtml: string;
  }

  export type Fpsdetect = {
      stuckCount: number;
  }

  export type I18N = {
      LANG: string;
      TEXT: Text;
  }

  export type Text = {
      MEDIA_ERR_SRC_NOT_SUPPORTED: string;
  }

  export type Icons = {
      play:           string;
      pause:          string;
      startPlay:      string;
      startPause:     string;
      playNext:       string;
      mini:           string;
      volumeSmall:    string;
      volumeLarge:    string;
      volumeMuted:    string;
      fullscreen:     string;
      exitFullscreen: string;
      loadingIcon:    string;
  }

  export type Keyboard = {
      isGlobalTrigger:    boolean;
      disableRootTrigger: boolean;
      keyCodeMap:         KeyCodeMap;
      seekStep:           number;
  }

  export type KeyCodeMap = {
      up:   Progresspreview;
      down: Progresspreview;
  }

  export type Progresspreview = {
      disable: boolean;
  }

  export type SizeInfo = {
      width:        number;
      height:       number;
      left:         number;
      top:          number;
      disableDrag?: boolean;
  }

  export type Mobile = {
      gestureY: boolean;
  }

  export type Start = {
      disableAnimate: boolean;
  }

  export type ConfigVideoConfig = {
      crossorigin: string;
  }

  export type VODLogOpts = {
      line_app_id:        number;
      line_user_id:       string;
      vtype:              string;
      tag:                string;
      codec_type:         string;
      drm_type:           number;
      disableLocalCache:  boolean;
      channel:            string;
      closeResolutionLog: boolean;
      closeSeekLog:       boolean;
      maxQueueCount:      number;
      isTask:             boolean;
      enableAbTest:       boolean;
      checkByInnerLog:    boolean;
  }

  export type Volume = {
      default:        number;
      showValueLabel: boolean;
  }

  export type Controls = {
      config:       Con;
      player:       string;
      playerConfig: string;
      pluginName:   string;
      icons:        DyLogStat;
      root:         string;
      parent:       string;
      langText:     DyLogStat;
      left:         string;
      center:       string;
      right:        string;
      innerRoot:    string;
  }

  export type CurDefinition = {
      url:          string;
      definition:   number;
      bitrate:      number;
      type:         string;
      networkSpeed: number;
  }

  export type Database = {
      indexedDB: DyLogStat;
      myDB:      MyDB;
  }

  export type MyDB = {
      name:    string;
      version: number;
      db:      null;
      ojstore: Ojstore;
  }

  export type Ojstore = {
      name:    string;
      keypath: string;
  }

  export type EffectNodeConsumeTime = {
      longest:  number;
      shortest: number;
  }

  export type InnerStates = {
      isActiveLocked: boolean;
  }

  export type PlayerInstanceVideoConfig = {
      controls:             boolean;
      autoplay:             boolean;
      playsinline:          boolean;
      "x5-playsinline":     boolean;
      "webkit-playsinline": boolean;
      tabindex:             number;
      mediaType:            string;
      "data-index":         number;
      crossorigin:          string;
  }

  export type VideoPos = {
      pi:     number;
      scale:  number;
      rotate: number;
      x:      number;
      y:      number;
      h:      number;
      w:      number;
      vy:     number;
      vx:     number;
  }

  export type VODLogger = {
      player:            string;
      eventQueue:        any[];
      line_app_id:       number;
      line_user_id:      string;
      playerCoreVersion: string;
      closeSeekLog:      boolean;
      start_time:        number;
      playlogs:          Playlogs;
      degradeLog:        DegradeLog;
      buffers:           Buffers;
      netLog:            NetLog;
      merror:            Merror;
      exInfo:            ExInfo;
      startStep:         number;
      bft:               number;
      inWaitingStart:    number;
      waitStartTime:     number;
      lastVideoTime:     number;
      lastOperaTime:     number;
      lastEventTime:     number;
      stallIntervalId:   null;
      seekLog:           SeekLog;
      resLogs:           ResLogs;
      apiLog:            APILog;
      errorLog:          ErrorLog;
      pauseLog:          PauseLog;
      stall:             Stall;
      load_state:        number;
      lv_method:         number;
      isSeeking:         boolean;
      isEnded:           boolean;
      isAutoplay:        number;
      abrInfo:           ABRInfo;
      urlLog:            URLLog;
      tracker:           Tracker;
      commonParams:      Params;
      listeners:         Listener[];
  }

  export type ABRInfo = {
      abr_general_info: DyLogStat;
      abr_event_info:   ABREventInfo;
      abr_play_info:    ABRPlayInfo;
      abr_user_info:    ABRUserInfo;
      abr_init_opts:    DyLogStat;
  }

  export type ABREventInfo = {
      video_switch: any[];
      video_stall:  any[];
      video_exit:   DyLogStat;
  }

  export type ABRPlayInfo = {
      start_play_time_ms: number;
      is_hint:            number;
      playback_info:      PlaybackInfo;
  }

  export type PlaybackInfo = {
      internet_speed_record: any[];
      play_bitrate_record:   any[];
      buffer_length_record:  any[];
      play_speed_record:     any[];
  }

  export type ABRUserInfo = {
      cancel_abr: number;
  }

  export type APILog = {
      code:    number;
      message: string;
      logid:   string;
      api:     string;
      auth:    string;
      error:   DyLogStat;
  }

  export type Buffers = {
      allBuffer: any[];
      curBuffer: CurBuffer;
  }

  export type CurBuffer = {
      buf_s_pos:   number;
      buf_e_pos:   number;
      buf_include: number;
      buf_diff:    number;
  }

  export type Params = {
      play_type:        number;
      source_type:      string;
      sdk_version:      string;
      pc:               string;
      line_app_id:      number;
      line_user_id:     string;
      app_version:      string;
      platform:         string;
      cpu_core:         number;
      memory_size:      number;
      support:          number;
      webdriver:        number;
      player_sessionid: string;
      web_url:          string;
      user_agent:       string;
  }

  export type DegradeLog = {
      bu_acu_t:   number;
      bc:         number;
      watch_dur:  number;
      hasSendEnd: boolean;
  }

  export type ErrorLog = {
      accu_errc:   number;
      try_err_c:   number;
      errt:        number;
      errc:        number;
      fir_errt:    number;
      fir_errc:    number;
      last_errors: any[];
      message:     string;
  }

  export type ExInfo = {
      stall: any[];
  }

  export type Listener = {
      evt: string;
  }

  export type Merror = {
      cdn:       any[];
      player:    any[];
      playCatch: any[];
      expied:    any[];
  }

  export type NetLog = {
      downloadSpeed: number;
      requestCount:  number;
      connectCost:   number;
      totalSpeed:    number;
      rqCount:       number;
      status:        number;
  }

  export type PauseLog = {
      pause_acu_t: number;
      isPausing:   boolean;
      pause_start: number;
  }

  export type Playlogs = {
      nt:          number;
      vt:          number;
      rt:          number;
      at:          number;
      pt:          number;
      bu_acu_t:    number;
      bc:          number;
      br:          number;
      fbrt:        string;
      dbc:         number;
      de_bu_acu_t: number;
      nbc:         number;
      n_bu_acu_t:  number;
      played:      Played[];
      degrade:     string;
      lc:          number;
  }

  export type Played = {
      begin: number;
      end:   number;
  }

  export type ResLogs = {
      lastSwitchStartTime: number;
      switch_count:        number;
      abr_switch_count:    number;
      initial_resolution:  string;
      final_resolution:    string;
      ldst:                number;
      ldet:                number;
      df:                  string;
      lf:                  string;
      played:              Played[];
      bc:                  number;
      bu_acu_t:            number;
      sc:                  number;
      sat:                 number;
      buf:                 number;
      lbuf:                number;
      lplayed:             number;
      vs:                  number;
      vds:                 number;
      vps:                 number;
      vis:                 number;
      bitrate:             number;
  }

  export type SeekLog = {
      intervalId:        number;
      lastSeekStartTime: number;
      seekBefore:        number;
      sat:               number;
      sc:                number;
      buf_include:       number;
  }

  export type Stall = {
      sc:     number;
      startf: number;
      endf:   number;
      start:  number;
      end:    number;
      cost:   number;
      acc:    number;
  }

  export type Tracker = {
      disableAutoPageView: boolean;
      bridgeReport:        boolean;
      staging:             boolean;
      pluginInstances:     PluginInstance[];
      sended:              boolean;
      started:             boolean;
      destroy:             boolean;
      sdkReady:            boolean;
      adapters:            DyLogStat;
      loadType:            string;
      sdkStop:             boolean;
      name:                string;
      hook:                DyLogStat;
      remotePlugin:        DyLogStat;
      Types:               { [key: string]: string };
      logger:              Logger;
      spider:              Spider;
      appBridge:           AppBridge;
      requestManager:      RequestManager;
      configManager:       ConfigManager;
      debugger:            Debugger;
      initConfig:          string;
      eventManager:        EventManager;
      tokenManager:        TokenManager;
      sessionManager:      SessionManager;
      inited:              boolean;
  }

  export type AppBridge = {
      collect: string;
  }

  export type ConfigManager = {
      is_first_time:  boolean;
      configPersist:  boolean;
      initConfig:     string;
      collect:        string;
      eventCheck:     EventCheck;
      configKey:      string;
      sessionStorage: DyLogStat;
      localStorage:   DyLogStat;
      envInfo:        EnvInfo;
      ab_version:     string;
      evtParams:      Params;
      isLast:         boolean;
      domain:         string;
      ab_cache:       AbCache;
  }

  export type AbCache = {
      data:                 DyLogStat;
      uuid:                 string;
      timestamp:            number;
      ab_version_multilink: any[];
      ab_ext_version:       any[];
      ab_version:           any[];
  }

  export type EnvInfo = {
      user:   User;
      header: Header;
  }

  export type Header = {
      app_id:          number;
      os_name:         string;
      os_version:      string;
      device_model:    string;
      language:        string;
      platform:        string;
      sdk_version:     string;
      sdk_lib:         string;
      timezone:        number;
      tz_offset:       number;
      resolution:      string;
      browser:         string;
      browser_version: string;
      referrer:        string;
      referrer_host:   string;
      width:           number;
      height:          number;
      screen_width:    number;
      screen_height:   number;
      tracer_data:     string;
      custom:          Custom;
  }

  export type Custom = {
      network_type:           string;
      $latest_referrer:       string;
      $latest_referrer_host:  string;
      $latest_search_keyword: string;
  }

  export type User = {
      user_unique_id: string;
      web_id:         string;
  }

  export type EventCheck = {
      collector:           string;
      config:              string;
      eventNameWhiteList:  string[];
      paramsNameWhiteList: string[];
      regStr:              DyLogStat;
  }

  export type Debugger = {
      devToolReady:  boolean;
      devToolOrigin: string;
      sendAlready:   boolean;
      collect:       string;
      config:        string;
      app_id:        number;
      cacheStorgae:  DyLogStat;
      loadUrl:       string;
      filterEvent:   DyLogStat;
  }

  export type EventManager = {
      eventLimit:      number;
      eventCache:      any[];
      beconEventCache: any[];
      collect:         string;
      config:          string;
      configManager:   string;
      eventCheck:      EventCheck;
      cacheStorgae:    DyLogStat;
      localStorage:    DyLogStat;
      maxReport:       number;
      reportTime:      number;
      timeout:         number;
      reportUrl:       string;
      eventKey:        string;
      beconKey:        string;
      abKey:           string;
      refer_key:       string;
      pageId:          string;
      reportTimeout:   null;
  }

  export type Logger = {
      isLog: boolean;
      name:  string;
  }

  export type PluginInstance = {
      config?:             ConfigConfig | string;
      collect?:            string;
      channel?:            string;
      fetchStatus?:        string;
      refreshFetchStatus?: string;
      versions?:           any[];
      extVersions?:        any[];
      mulilinkVersions?:   any[];
      enable_multilink?:   boolean;
      enable_ab_visual?:   boolean;
      editMode?:           boolean;
      callbacks?:          any[];
      data?:               null;
      changeListener?:     DyLogStat;
      readyStatus?:        boolean;
      exposureCache?:      any[];
      autoTrackStart?:     boolean;
      duration?:           number;
      reportUrl?:          string;
      eventCheck?:         EventCheck;
      cache?:              DyLogStat;
      retryWaitTime?:      number;
      retryStatus?:        boolean;
      retryCacheStatus?:   boolean;
      autotrack?:          boolean;
      spa?:                boolean;
      allowHash?:          boolean;
  }

  export type ConfigConfig = {
      app_id:              number;
      channel:             string;
      log:                 boolean;
      disable_sdk_monitor: boolean;
      disable_heartbeat:   boolean;
      enable_ab_test:      boolean;
  }

  export type RequestManager = {
      collector:     string;
      config:        string;
      requestType:   string;
      supportBeacon: boolean;
      errorCode:     ErrorCode;
      customHeader:  DyLogStat;
  }

  export type ErrorCode = {
      NO_URL:       number;
      IMG_ON:       number;
      IMG_CATCH:    number;
      BEACON_FALSE: number;
      XHR_ON:       number;
      RESPONSE:     number;
      TIMEOUT:      number;
  }

  export type SessionManager = {
      collect:    string;
      storage:    DyLogStat;
      sessionKey: string;
      expireTime: number;
      sessionExp: number;
  }

  export type Spider = {
      spiderBot: string[];
  }

  export type TokenManager = {
      cacheToken:    CacheToken;
      collect:       string;
      config:        string;
      configManager: string;
      storage:       DyLogStat;
      tokenKey:      string;
      expiresTime:   number;
      cookieDomain:  string;
      tokenType:     string;
      tokenReady:    boolean;
  }

  export type CacheToken = {
      web_id:         string;
      user_unique_id: string;
      timestamp:      number;
  }

  export type URLLog = {
      initial_url:  string;
      initial_host: string;
      initial_ip:   string;
  }

}
