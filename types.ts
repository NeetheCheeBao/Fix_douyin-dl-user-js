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
    export interface PlayerInstance {
        vtype:                       string;
        bizType:                     number;
        videoConfig:                 PlayerInstanceVideoConfig;
        video:                       PlayerInstanceVideo;
        videoEventMiddleware:        InnerContainer;
        config:                      PlayerConfigClass;
        userTimer:                   null;
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
        innerContainer:              InnerContainer;
        controls:                    Controls;
        topBar:                      InnerContainer;
        root:                        InnerContainer;
        database:                    Database;
        isUserActive:                boolean;
        innerStates:                 InnerStates;
        instManager:                 InnerContainer;
        leftBar:                     InnerContainer;
        rightBar:                    InnerContainer;
        vodLogger:                   VODLogger;
        preloader:                   InnerContainer;
        mp4MseFlag:                  boolean;
        oldBit:                      number;
        canCheckNotUse:              boolean;
        replayed:                    boolean;
        equalizeVolumeState:         string;
        volumeBalanceState:          number;
        pauseType:                   string;
        isInstNext:                  boolean;
        isMultiple:                  number;
        curClarity:                  string;
        videoList:                   List[];
        isComplete:                  boolean;
        loadstart:                   number;
        loadeddata:                  number;
        bufferedBeforeActive:        number;
        loadstartBeforeActive:       number;
        loadeddataBeforeActive:      number;
        blockPlayType:               string;
        preplay:                     number;
        preplayStat:                 number;
        effectNodeConsumeTime:       EffectNodeConsumeTime;
        lufs:                        number;
        useMammonWorkletProcessorV3: boolean;
        hitMammonWorkletProcessorV3: boolean;
        errored:                     number;
        playTimestamp:               number;
        firstframe:                  number;
        stages:                      Stages;
        firstFrameTmp:               number;
        upperCount:                  number;
        lowerCount:                  number;
        abrCount:                    number;
        abrChangeCount:              number;
        upperAbrChangeCount:         number;
        lowerAbrChangeCount:         number;
        playTime:                    number;
        removedBuffer:               number;
        isEnded:                     boolean;
        danmakuShowCount:            number;
        danmaku:                     Danmaku;
        danmakuIds:                  string[];
        videoTimes:                  number[];
        realTimeSpeedPCDN:           number;
        avgSpeedPCDN:                number;
    }
    
    export interface PlayerConfigClass {
        id:                           string;
        el:                           InnerContainer;
        url:                          DowngradeURL[];
        domEventType:                 string;
        nullUrlStart:                 boolean;
        width:                        string;
        height:                       string;
        fluid:                        boolean;
        fitVideoSize:                 string;
        videoFillMode:                string;
        volume:                       Volume;
        autoplay:                     boolean;
        autoplayMuted:                boolean;
        loop:                         boolean;
        isLive:                       boolean;
        zoom:                         number;
        videoInit:                    boolean;
        poster:                       string;
        isMobileSimulateMode:         boolean;
        defaultPlaybackRate:          number;
        execBeforePluginsCall:        null;
        allowSeekAfterEnded:          boolean;
        enableContextmenu:            boolean;
        closeVideoClick:              boolean;
        closeVideoDblclick:           boolean;
        closePlayerBlur:              boolean;
        closeDelayBlur:               boolean;
        leavePlayerTime:              number;
        closePlayVideoFocus:          boolean;
        closePauseVideoFocus:         boolean;
        closeFocusVideoFocus:         boolean;
        closeControlsBlur:            boolean;
        topBarAutoHide:               boolean;
        videoAttributes:              InnerContainer;
        startTime:                    number;
        seekedStatus:                 string;
        miniprogress:                 boolean;
        ignores:                      string[];
        whitelist:                    any[];
        inactive:                     number;
        lang:                         string;
        controls:                     Con;
        marginControls:               boolean;
        fullscreenTarget:             InnerContainer;
        screenShot:                   boolean;
        rotate:                       boolean;
        pip:                          Pip;
        download:                     boolean;
        mini:                         boolean;
        cssFullscreen:                boolean;
        keyShortcut:                  boolean;
        presets:                      null[];
        plugins:                      null[];
        playbackRate:                 boolean;
        definition:                   Definition;
        playsinline:                  boolean;
        customDuration:               number;
        timeOffset:                   number;
        icons:                        Icons;
        i18n:                         I18N[];
        tabindex:                     number;
        thumbnail:                    Thumbnail;
        videoConfig:                  ConfigVideoConfig;
        isHideTips:                   boolean;
        minWaitDelay:                 number;
        commonStyle:                  CommonStyle;
        reuse:                        number;
        closeVideoPreventDefault:     boolean;
        closeVideoStopPropagation:    boolean;
        awemeType:                    number;
        dynamicBg:                    DynamicBg;
        enter:                        Enter;
        start:                        Start;
        progresspreview:              Progresspreview;
        progress:                     boolean;
        miniscreen:                   SizeInfo;
        vodLogOpts:                   VODLogOpts;
        BitrateSelector:              BitrateSelector;
        keyboard:                     Keyboard;
        vtype:                        string;
        TestSpeed:                    TestSpeed;
        mobile:                       Mobile;
        fixOOM:                       boolean;
        unregisterPluginFromControls: boolean;
        fpsdetect:                    Fpsdetect;
        awemeInfo:                    AwemeInfo;
        size:                         number;
        uri:                          URI;
        vid:                          string;
        authorId:                     string;
        videoWidth:                   number;
        videHeight:                   number;
        defaultDefinition:            number;
        defaultBitrate:               number;
        duration:                     number;
        bizType:                      number;
        bitrate:                      number;
        codecType:                    string;
        mediaType:                    string;
        focusUserDefinition:          boolean;
        DASHPlugin:                   DASHPlugin;
        downgradeUrl:                 DowngradeURL[];
        videoUrl:                     DowngradeURL[];
        recordList:                   any[];
        mp4encryptplayer:             Mp4Encryptplayer;
        enableSr:                     boolean;
        time:                         Time;
        clearLists:                   ClearList[];
        notUseRefreshVid:             null;
    }
    
    export interface BitrateSelector {
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
        autoBitrateParams:            AutoBitrateParams;
        mixFactor:                    number;
        white_list:                   string[];
        bitrateKey:                   string;
        overscore:                    Overscore;
    }
    
    export interface AutoBitrateParams {
        paramA: number;
        paramB: number;
        paramC: number;
        paramD: number;
    }
    
    export interface Overscore {
        isOpen:     boolean;
        type:       string;
        filterKey:  string;
        filterList: FilterList[];
        enable266:  boolean;
    }
    
    export interface FilterList {
        source: number;
        target: number[];
    }
    
    export interface QualityFilter {
        adapt_lowest_1080_1: AdaptLowest1080_1;
        adapt_lowest_720_1:  AdaptLowest1080_1;
        normal_1080_0:       AdaptLowest1080_1;
    }
    
    export interface AdaptLowest1080_1 {
        lower: number;
        upper: number;
    }
    
    export interface DASHPlugin {
        minBufferLength:              number;
        maxBufferLength:              number;
        defaultFormat:                string;
        dashOpts:                     InnerContainer;
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
        dashAdaptRangeConfig:         null;
        canplayTimeout:               number;
        downgrade:                    number;
        fixPreplay:                   number;
        usePlayAbortRetry:            boolean;
        useStuckCheck:                boolean;
        useStuckWaitBuffer:           boolean;
        usePCDNOpt:                   boolean;
        adaptRange:                   AdaptRange;
        notDegradeErrorList:          number[];
        segmentMinDuration:           number;
    }
    
    export interface AdaptRange {
        cacheSafeFactor:    number;
        estPTcontrol:       boolean;
        estPlayTime:        number;
        maxTargetCacheDur:  number;
        minBandwidth:       number;
        minDangerThreshold: number;
        minTargetCacheDur:  number;
        rangeControl:       boolean;
        rangeMaxDuration:   number;
        rangeMinDuration:   number;
        rangeMinSize:       number;
        safeFactor:         number;
        targetCacheControl: boolean;
    }
    
    export interface AutoBitrateOpts {
        isPlayAutoDefi: boolean;
        isOpenAutoDefi: boolean;
        isClassic:      boolean;
        abrDriveMode:   number;
        algoArg:        AlgoArg;
    }
    
    export interface AlgoArg {
        bbaControl: boolean;
        highLevel:  number;
        lowLevel:   number;
    }
    
    export interface InnerContainer {
    }
    
    export interface DashPcdnConfig {
        openPCDN:        boolean;
        adaptPCDNConfig: DashPcdnConfigAdaptPCDNConfig;
    }
    
    export interface DashPcdnConfigAdaptPCDNConfig {
        PCDNBufferControl: boolean;
    }
    
    export interface Loader {
        loaderCount:         number;
        onProcessMinLen:     number;
        enableDynamicMinLen: boolean;
    }
    
    export interface PcdnConfig {
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
    
    export interface PcdnConfigAdaptPCDNConfig {
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
    
    export interface TestSpeed {
        url:              string;
        openSpeed:        boolean;
        testCnt:          number;
        addSpeedTypeList: string[];
        loadSize:         number;
        testTimeStep:     number;
    }
    
    export interface AwemeInfo {
        rawAdData:                   null;
        packAdDate:                  null;
        isAds:                       boolean;
        logPb:                       string;
        awemeId:                     string;
        awemeType:                   number;
        userRecommendStatus:         number;
        groupId:                     string;
        cooperationInfo:             InnerContainer;
        chapterInfo:                 ChapterInfo;
        authorInfo:                  AuthorInfo;
        awemeControl:                AwemeControl;
        danmakuControl:              DanmakuControl;
        douyinPcVideoExtra:          InnerContainer;
        pcBlockedAreaRatio:          number[];
        desc:                        string;
        authorUserId:                number;
        authenticationToken:         string;
        mediaType:                   number;
        createTime:                  number;
        textExtra:                   TextExtra[];
        relatedVideoExtra:           RelatedVideoExtra;
        userDigged:                  boolean;
        userCollected:               boolean;
        video:                       AwemeInfoVideo;
        mixInfo:                     MixInfo;
        seriesInfo:                  SeriesInfo;
        isPrivate:                   boolean;
        isFriendLimit:               boolean;
        download:                    Download;
        friendRecommendInfo:         FriendRecommendInfo;
        impressionData:              string;
        fakeHorizontalInfo:          InnerContainer;
        feedFlowControllerInfo:      InnerContainer;
        tag:                         Tag;
        stroyInfo:                   StroyInfo;
        stats:                       Stats;
        shareInfo:                   ShareInfo;
        status:                      StatusClass;
        webRawData:                  WebRawData;
        wallpaperTagInfo:            null;
        music:                       Music;
        images:                      any[];
        imageInfos:                  string;
        imageAlbumMusicInfo:         InnerContainer;
        imgBitrate:                  any[];
        suggestWords:                SuggestWord[];
        seoInfo:                     SEOInfo;
        requestTime:                 number;
        lvideoBrief:                 InnerContainer;
        relatedVideo:                RelatedVideo;
        varietyVideo:                InnerContainer;
        fetchExpired:                number;
        dyQ:                         string;
        videoTag:                    VideoTag[];
        poiInfo:                     InnerContainer;
        riskInfos:                   RiskInfos;
        entertainmentProductInfo:    EntertainmentProductInfo;
        weeklyRecommend:             null;
        douyinPCHighlight:           null;
        selectAnchorExpandedContent: number;
        douyinPCVideoExtraSEO:       InnerContainer;
    }
    
    export interface AuthorInfo {
        uid:                    string;
        isAdFake:               boolean;
        secUid:                 string;
        nickname:               string;
        remarkName:             string;
        avatarUri:              string;
        followStatus:           number;
        followerStatus:         number;
        enterpriseVerifyReason: string;
        customVerify:           string;
        roomData:               InnerContainer;
        avatarThumb:            AvatarThumb;
        roleTitle:              string;
        secret:                 number;
        roomId:                 number;
        accountCertInfo:        InnerContainer;
    }
    
    export interface AvatarThumb {
        height:  number;
        width:   number;
        uri:     string;
        urlList: string[];
        urlKey?: string;
    }
    
    export interface AwemeControl {
        canComment:     boolean;
        canForward:     boolean;
        canShare:       boolean;
        canShowComment: boolean;
    }
    
    export interface ChapterInfo {
        status:              boolean;
        list:                any[];
        isPoint:             boolean;
        useRecommendChapter: boolean;
        showAiTag:           boolean;
    }
    
    export interface DanmakuControl {
        enableDanmaku:      boolean;
        isPostDenied:       boolean;
        postDeniedReason:   string;
        postPrivilegeLevel: number;
    }
    
    export interface Download {
        prevent:       boolean;
        urlList:       string[];
        allowDownload: boolean;
        dataSize:      number;
    }
    
    export interface EntertainmentProductInfo {
        biz:         number;
        market_info: MarketInfo;
        sub_title:   null;
    }
    
    export interface MarketInfo {
        limit_free:    LimitFree;
        marketing_tag: null;
    }
    
    export interface LimitFree {
        in_free: boolean;
    }
    
    export interface FriendRecommendInfo {
        friend_recommend_source: number;
        label_user_list:         null;
        recommend_predict_rate:  RecommendPredictRate;
        recommend_predict_score: RecommendPredictRate;
    }
    
    export interface RecommendPredictRate {
        s: number;
        e: number;
        c: number[];
    }
    
    export interface MixInfo {
        cover:             string;
        coverUri:          string;
        status:            number;
        hasUpdatedEpisode: number;
        isCollected:       number;
        author:            Author;
        isSeries2Mix:      boolean;
        chargeInfo:        InnerContainer;
    }
    
    export interface Author {
        uid:         string;
        secret:      number;
        isBlockedV2: boolean;
        userNotSee:  number;
        nickname?:   string;
    }
    
    export interface Music {
        id:                RecommendPredictRate;
        idStr:             string;
        mid:               string;
        author:            string;
        title:             string;
        coverThumb:        AvatarThumb;
        coverMedium:       AvatarThumb;
        playUrl:           AvatarThumb;
        secUid:            string;
        shareInfo:         InnerContainer;
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
    
    export interface Extra {
        hasEdited: number;
    }
    
    export interface RelatedVideo {
        extra: InnerContainer;
    }
    
    export interface RelatedVideoExtra {
        tags: Tags;
    }
    
    export interface Tags {
        level1: Level;
        level2: Level;
        level3: Level;
    }
    
    export interface Level {
        tag_id:   number;
        prob:     number;
        tag_name: string;
    }
    
    export interface RiskInfos {
        content:   string;
        risk_sink: boolean;
        type:      number;
        vote:      boolean;
        warn:      boolean;
    }
    
    export interface SEOInfo {
        ocrContent: string;
        expFields:  InnerContainer;
    }
    
    export interface SeriesInfo {
        isSeries2Mix:      boolean;
        cover:             string;
        horizontalCover:   string;
        status:            number;
        hasUpdatedEpisode: number;
        isCollected:       number;
        author:            Author;
        isCharge:          boolean;
        isIaa:             boolean;
        stats:             InnerContainer;
        chargeInfo:        InnerContainer;
    }
    
    export interface ShareInfo {
        shareUrl:      string;
        shareLinkDesc: string;
    }
    
    export interface Stats {
        commentCount:   number;
        diggCount:      number;
        shareCount:     number;
        playCount:      number;
        collectCount:   number;
        downloadCount:  number;
        forwardCount:   number;
        liveWatchCount: number;
        recommendCount: number;
    }
    
    export interface StatusClass {
        allowShare:                 boolean;
        isReviewing:                boolean;
        isDelete:                   boolean;
        isProhibited:               boolean;
        privateStatus:              number;
        partSee:                    number;
        videoMute:                  VideoMute;
        reviewResult:               InnerContainer;
        allowFriendRecommendGuide:  boolean;
        allowSelfRecommendToFriend: boolean;
    }
    
    export interface VideoMute {
        isMute:   boolean;
        muteDesc: string;
    }
    
    export interface StroyInfo {
        shareFrom:   string;
        isSharePost: boolean;
    }
    
    export interface SuggestWord {
        scene:    string;
        words:    Word[];
        hintText: string;
        iconUrl:  string;
    }
    
    export interface Word {
        word:   string;
        wordId: string;
        info:   string;
    }
    
    export interface Tag {
        isTop:          boolean;
        relationLabels: boolean;
        isStory:        boolean;
        inReviewing:    boolean;
        labelPartSee:   number;
    }
    
    export interface TextExtra {
        start:           number;
        end:             number;
        type:            number;
        hashtagId:       string;
        hashtagName:     string;
        secUid:          string;
        awemeId:         string;
        userId:          UserID;
        isCommerce:      boolean;
        searchHideWords: number;
        searchQueryId:   string;
        searchRank:      number;
        searchText:      string;
    }
    
    export enum UserID {
        Empty = "",
        The3483731444642003 = "3483731444642003",
    }
    
    export interface AwemeInfoVideo {
        width:                number;
        height:               number;
        ratio:                string;
        duration:             number;
        dataSize:             number;
        uri:                  URI;
        playAddr:             DowngradeURL[];
        playAddrSize:         number;
        playAddrFileHash:     string;
        playApi:              string;
        playAddrH265:         DowngradeURL[];
        playAddrH265Size:     number;
        playAddrH265FileHash: string;
        playApiH265:          string;
        bitRateList:          List[];
        bitRateAudioList:     any[];
        cover:                string;
        coverUrlList:         string[];
        coverUri:             string;
        dynamicCover:         string;
        originCover:          string;
        rawCover:             string;
        originCoverUrlList:   string[];
        gaussianCover:        string;
        meta:                 Meta;
        bigThumbs:            BigThumb[];
        videoModel:           null;
    }
    
    export interface BigThumb {
        duration:   number;
        fext:       string;
        img_num:    number;
        img_url:    string;
        img_urls:   string[];
        img_x_len:  number;
        img_x_size: number;
        img_y_len:  number;
        img_y_size: number;
        interval:   number;
        uri:        string;
        uris:       string[];
    }
    
    export interface List {
        uri:                  URI;
        dataSize:             number;
        width:                number;
        height:               number;
        playAddr:             DowngradeURL[];
        playApi:              string;
        isH265:               number;
        qualityType:          number;
        bitRate:              number;
        videoFormat:          Format;
        gearName:             string;
        fps:                  number;
        playerAccessKey:      string;
        HDRBit:               string;
        HDRType:              string;
        featureId:            string;
        format:               Format;
        fileId:               string;
        pktOffsetMap:         PktOffsetMap[];
        realBitrate:          number;
        mvmaf:                { [key: string]: number };
        ufq:                  Ufq;
        srSharpnessStrength?: number;
    }
    
    export enum Format {
        Mp4 = "mp4",
    }
    
    export interface PktOffsetMap {
        time:   number;
        offset: number;
    }
    
    export interface DowngradeURL {
        src: string;
    }
    
    export interface Ufq {
        enh?:      number;
        playback?: Playback;
        src?:      number;
        trans?:    number;
        version?:  Version;
    }
    
    export interface Playback {
        ori:  number;
        srv1: number;
    }
    
    export enum Version {
        V10 = "v1.0",
    }
    
    export enum URI {
        V0D00Fg10000D3C7Glvog65Ud4Dg3Eqg = "v0d00fg10000d3c7glvog65ud4dg3eqg",
    }
    
    export interface Meta {
        bright_ratio_mean:       string;
        brightness_mean:         string;
        diff_overexposure_ratio: string;
        enable_manual_ladder:    string;
        format:                  Format;
        gear_vqm:                string;
        hrids:                   string;
        is_spatial_video:        string;
        isad:                    string;
        loudness:                string;
        overexposure_ratio_mean: string;
        peak:                    string;
        qprf:                    string;
        r_1:                     string;
        r_10:                    string;
        r_11:                    string;
        r_2:                     string;
        r_3:                     string;
        r_4:                     string;
        r_6:                     string;
        r_7:                     string;
        r_8:                     string;
        r_9:                     string;
        sdgs:                    string;
        sr_potential:            string;
        sr_score:                string;
        std_brightness:          string;
        strategy_tokens:         string;
        title_info:              string;
        volume_info:             string;
        vqs_origin:              string;
    }
    
    export interface VideoTag {
        level:   number;
        tagId:   number;
        tagName: string;
    }
    
    export interface WebRawData {
        oftenWatchInfo: OftenWatchInfo;
        videoImageInfo: InnerContainer;
        CTR:            Ctr;
        brandAd:        BrandAd;
        insertInfo:     InsertInfo;
        quality:        number;
    }
    
    export interface Ctr {
        recommendScore: RecommendScore;
    }
    
    export interface RecommendScore {
        showMix:          number;
        showHot:          number;
        showSeries:       number;
        showRelateSearch: number;
        showAiSearch:     number;
        showRelateVideo:  number;
        relateAiTag:      string;
    }
    
    export interface BrandAd {
        biz_content: InnerContainer;
    }
    
    export interface InsertInfo {
        is_ad: boolean;
    }
    
    export interface OftenWatchInfo {
        yellowPoint: boolean;
    }
    
    export interface ClearList {
        key:             string;
        label:           string;
        val:             ValClass | string;
        stat:            string;
        quality:         number;
        defaultQuality?: number;
        gearName:        string;
        gearType:        number;
    }
    
    export interface ValClass {
        type:  string;
        key:   null;
        ref:   null;
        props: ValProps;
    }
    
    export interface ValProps {
        className: string;
        children:  Array<Child | null>;
    }
    
    export interface Child {
        type:  string;
        key:   null;
        ref:   null;
        props: ChildProps;
    }
    
    export interface ChildProps {
        children: string;
    }
    
    export interface CommonStyle {
        progressColor:  string;
        playedColor:    string;
        cachedColor:    string;
        sliderBtnStyle: InnerContainer;
        volumeColor:    string;
    }
    
    export interface Con {
        mode:     string;
        autoHide: boolean;
        initShow: boolean;
        disable?: boolean;
    }
    
    export interface Definition {
        list: CurDefinition[];
    }
    
    export interface CurDefinition {
        vid:                     string;
        size:                    number;
        uri:                     URI;
        url:                     DowngradeURL[];
        bitrate:                 number;
        definition:              number;
        qualityType:             number;
        duration:                number;
        isH265:                  number;
        gearName:                string;
        pktOffsetMap:            PktOffsetMap[];
        featureId:               string;
        isH266:                  number;
        isHDR:                   number;
        vtype:                   string;
        mediaType:               string;
        codecType:               string;
        fps:                     number;
        file_id:                 string;
        realBitrate:             number;
        width:                   number;
        height:                  number;
        mvmaf:                   { [key: string]: number };
        ufq:                     Ufq;
        format:                  Format;
        srSharpnessStrength?:    number;
        filterRateCnt?:          number;
        isFilterMaxRate?:        number;
        bitrateSetSelector?:     string[];
        qualityBitrateSelector?: string[];
        type?:                   string;
        speed?:                  number;
        chosenType?:             number;
        chosenReason?:           string;
    }
    
    export interface DynamicBg {
        disable:   boolean;
        frameRate: number;
        filter:    string;
        maskBg:    string;
    }
    
    export interface Enter {
        innerHtml: string;
    }
    
    export interface Fpsdetect {
        stuckCount: number;
    }
    
    export interface I18N {
        LANG: string;
        TEXT: Text;
    }
    
    export interface Text {
        MEDIA_ERR_SRC_NOT_SUPPORTED: string;
    }
    
    export interface Icons {
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
        pipIcon:        string;
        pipIconExit:    string;
    }
    
    export interface Keyboard {
        isGlobalTrigger:    boolean;
        disableRootTrigger: boolean;
        keyCodeMap:         KeyCodeMap;
        seekStep:           number;
    }
    
    export interface KeyCodeMap {
        up:   Down;
        down: Down;
    }
    
    export interface Down {
        disable: boolean;
    }
    
    export interface SizeInfo {
        width:        number;
        height:       number;
        left:         number;
        top:          number;
        disableDrag?: boolean;
    }
    
    export interface Mobile {
        gestureY: boolean;
    }
    
    export interface Mp4Encryptplayer {
        preloadTime:           number;
        isDegrade:             boolean;
        waitingTimeOut:        number;
        preloadCacheType:      number;
        needAutoBitrate:       boolean;
        startPreloadMinBuffer: number;
        maxBufferLength:       number;
        minBufferLength:       number;
        removeBufferLen:       number;
        preloadMaxCacheCount:  number;
        resumePlayWaterLevel:  number;
        onProcessMinLen:       number;
        needPreloadCheck:      boolean;
        forceVideoPlay:        boolean;
        segmentMinDuration:    number;
        tickInSeconds:         number;
        audioGroupingStrategy: number;
        switchBitRateWay:      boolean;
        loadFirstGopData:      boolean;
        noPreloadAddBufferLen: number;
        removeBufferAtSeek:    boolean;
        loadRangeType:         string;
        pcdnConfig:            PcdnConfig;
        adaptRange:            AdaptRange;
        notDegradeErrorList:   number[];
        enableMsePatches:      boolean;
    }
    
    export interface Pip {
        showIcon:                 boolean;
        preferDocument:           boolean;
        disallowReturnToOpener:   boolean;
        alwaysKeepDocumentWindow: boolean;
        width:                    number;
        height:                   number;
    }
    
    export interface Progresspreview {
        width:  number;
        height: number;
    }
    
    export interface Start {
        disableAnimate: boolean;
    }
    
    export interface Thumbnail {
        urls:    string[];
        pic_num: number;
        row:     number;
        col:     number;
        height:  number;
        width:   number;
    }
    
    export interface Time {
        smartRender: boolean;
    }
    
    export interface ConfigVideoConfig {
        crossorigin:             string;
        disablePictureInPicture: boolean;
    }
    
    export interface VODLogOpts {
        line_app_id:        number;
        line_user_id:       string;
        vtype:              string;
        tag:                string;
        codec_type:         string;
        drm_type:           number;
        disableLocalCache:  boolean;
        channel:            ChannelEnum;
        closeResolutionLog: boolean;
        closeSeekLog:       boolean;
        maxQueueCount:      number;
        isTask:             boolean;
        enableAbTest:       boolean;
        checkByInnerLog:    boolean;
    }
    
    export enum ChannelEnum {
        CN = "cn",
    }
    
    export interface Volume {
        default:        number;
        showValueLabel: boolean;
    }
    
    export interface Controls {
        config:       Con;
        playerConfig: PlayerConfigClass;
        pluginName:   string;
        icons:        InnerContainer;
        root:         InnerContainer;
        parent:       InnerContainer;
        langText:     InnerContainer;
        left:         InnerContainer;
        center:       InnerContainer;
        right:        InnerContainer;
        innerRoot:    InnerContainer;
    }
    
    export interface Danmaku {
        logger:          BulletBtnLogger;
        config:          DanmakuConfig;
        globalHooks:     InnerContainer;
        hideArr:         any[];
        recycler:        Recycler;
        freezeId:        null;
        container:       InnerContainer;
        live:            boolean;
        direction:       string;
        bulletBtn:       BulletBtn;
        main:            Main;
        isReady:         boolean;
        emojiListMapped: InnerContainer;
        mouseControl:    boolean;
    }
    
    export interface BulletBtn {
        logger: BulletBtnLogger;
        main:   Main;
    }
    
    export interface BulletBtnLogger {
        constructorName: ConstructorName;
    }
    
    export enum ConstructorName {
        Bullet = "bullet",
        ChannelJS = "channel.js",
        ControlJS = "control.js",
        DanmuJS = "danmu.js",
        MainJS = "main.js",
    }
    
    export interface Main {
        logger:      BulletBtnLogger;
        container:   InnerContainer;
        channel:     MainChannel;
        data:        Datum[];
        playedData:  any[];
        queue:       QueueElement[];
        timer:       null;
        playRate:    number;
        retryStatus: string;
        interval:    number;
        handleTimer: number;
    }
    
    export interface MainChannel {
        logger:          BulletBtnLogger;
        width:           number;
        height:          number;
        container:       InnerContainer;
        resetId:         null;
        channels:        ChannelElement[];
        containerPos:    InnerContainer;
        containerWidth:  number;
        containerHeight: number;
        containerTop:    number;
        containerBottom: number;
        containerLeft:   number;
        containerRight:  number;
        channelCount:    number;
        channelHeight:   number;
        resizing:        boolean;
        resizeId:        null;
    }
    
    export interface ChannelElement {
        id:        number;
        queue:     ChannelQueue;
        operating: Operating;
        bookId:    InnerContainer;
    }
    
    export interface Operating {
        scroll: boolean;
        top:    boolean;
        bottom: boolean;
    }
    
    export interface ChannelQueue {
        scroll: QueueElement[];
        top:    any[];
        bottom: any[];
    }
    
    export interface QueueElement {
        logger:             BulletBtnLogger;
        options:            Datum;
        duration:           number;
        id:                 string;
        container:          InnerContainer;
        mode:               Mode;
        start:              number;
        prior:              boolean;
        realTime:           boolean;
        reuseDOM:           boolean;
        noCopyEl:           boolean;
        recycler:           Recycler;
        status:             StatusEnum;
        random:             number;
        el:                 InnerContainer;
        elPos:              InnerContainer;
        width:              number;
        height:             number;
        channel_id:         number[];
        top:                number;
        hasMove:            boolean;
        moveMoreS:          number;
        moveContainerWidth: number;
    }
    
    export enum Mode {
        Scroll = "scroll",
    }
    
    export interface Datum {
        start:      number;
        realTime:   boolean;
        duration:   number;
        id:         string;
        user_id:    string;
        score:      number;
        elLazyInit: boolean;
        text:       string;
        style:      Style;
        prior:      boolean;
        attached_:  boolean;
    }
    
    export interface Style {
        fontSize:    FontSize;
        height:      FontSize;
        lineHeight:  FontSize;
        color:       Color;
        marginTop:   string;
        perspective: Perspective;
        left:        string;
    }
    
    export enum Color {
        Ffffff = "#FFFFFF",
    }
    
    export enum FontSize {
        The20Px = "20px",
    }
    
    export enum Perspective {
        The500Em = "500em",
    }
    
    export interface Recycler {
        idleList:  InnerContainer[];
        usingList: any[];
        options:   Options;
    }
    
    export interface Options {
        initSize: number;
    }
    
    export enum StatusEnum {
        Start = "start",
    }
    
    export interface DanmakuConfig {
        overlap:            boolean;
        area:               Area;
        hooks:              InnerContainer;
        live:               boolean;
        comments:           any[];
        direction:          string;
        needResizeObserver: boolean;
        dropStaleComments:  boolean;
        channelSize:        number;
        interval:           number;
        highScorePriority:  boolean;
        chaseEffect:        boolean;
        disableCopyDOM:     boolean;
        mouseControl:       boolean;
        mouseControlPause:  boolean;
        container:          InnerContainer;
        defaultOff:         boolean;
        bOffset:            number;
    }
    
    export interface Area {
        start: number;
        end:   number;
    }
    
    export interface Database {
        indexedDB: InnerContainer;
        myDB:      MyDB;
    }
    
    export interface MyDB {
        name:    string;
        version: number;
        db:      null;
        ojstore: Ojstore;
    }
    
    export interface Ojstore {
        name:    string;
        keypath: string;
    }
    
    export interface EffectNodeConsumeTime {
        longest:  number;
        shortest: number;
    }
    
    export interface InnerStates {
        isActiveLocked: boolean;
    }
    
    export interface Stages {
        playerinit_to_loadstart:        number;
        playerinit_to_loadeddata:       number;
        playerstart_to_mp4metaready:    number;
        mp4init_to_mp4metaready:        number;
        playerinitfinally_to_loadstart: number;
        mp4metaready_to_loadstart:      number;
        loadstart_to_mseopen:           number;
        mseinitsegok_to_appenddataok:   number;
        mseinitseg_to_mseinitsegok:     number;
        appenddataok_to_loadeddata:     number;
        mseopen_to_loadeddata:          number;
        mse_all_phrase:                 string;
        preload_error:                  number;
        is_slide_loadeddata:            number;
        slide_to_loadeddata:            null;
    }
    
    export interface PlayerInstanceVideo {
        sourceNode: InnerContainer;
    }
    
    export interface PlayerInstanceVideoConfig {
        controls:                boolean;
        autoplay:                boolean;
        playsinline:             boolean;
        "x5-playsinline":        boolean;
        "webkit-playsinline":    boolean;
        tabindex:                number;
        mediaType:               string;
        "data-index":            number;
        crossorigin:             string;
        disablePictureInPicture: boolean;
    }
    
    export interface VideoPos {
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
    
    export interface VODLogger {
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
    
    export interface ABRInfo {
        abr_general_info: InnerContainer;
        abr_event_info:   ABREventInfo;
        abr_play_info:    ABRPlayInfo;
        abr_user_info:    ABRUserInfo;
        abr_init_opts:    InnerContainer;
    }
    
    export interface ABREventInfo {
        video_switch: any[];
        video_stall:  any[];
        video_exit:   InnerContainer;
    }
    
    export interface ABRPlayInfo {
        start_play_time_ms: number;
        is_hint:            number;
        playback_info:      PlaybackInfo;
    }
    
    export interface PlaybackInfo {
        internet_speed_record: any[];
        play_bitrate_record:   any[];
        buffer_length_record:  any[];
        play_speed_record:     any[];
    }
    
    export interface ABRUserInfo {
        cancel_abr: number;
    }
    
    export interface APILog {
        code:    number;
        message: string;
        logid:   string;
        api:     string;
        auth:    string;
        error:   InnerContainer;
    }
    
    export interface Buffers {
        allBuffer: AllBuffer[];
        curBuffer: CurBuffer;
    }
    
    export interface AllBuffer {
        s: number;
        e: number;
    }
    
    export interface CurBuffer {
        buf_diff:    number;
        buf_s_pos:   number;
        buf_e_pos:   number;
        buf_include: number;
    }
    
    export interface Params {
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
    
    export interface DegradeLog {
        bu_acu_t:   number;
        bc:         number;
        watch_dur:  number;
        hasSendEnd: boolean;
    }
    
    export interface ErrorLog {
        accu_errc:   number;
        try_err_c:   number;
        errt:        number;
        errc:        number;
        fir_errt:    number;
        fir_errc:    number;
        last_errors: any[];
        message:     string;
    }
    
    export interface ExInfo {
        stall: any[];
    }
    
    export interface Listener {
        evt: string;
    }
    
    export interface Merror {
        cdn:       any[];
        player:    any[];
        playCatch: any[];
        expied:    any[];
    }
    
    export interface NetLog {
        downloadSpeed: number;
        requestCount:  number;
        connectCost:   number;
        totalSpeed:    number;
        rqCount:       number;
        status:        number;
    }
    
    export interface PauseLog {
        pause_acu_t: number;
        isPausing:   boolean;
        pause_start: number;
    }
    
    export interface Playlogs {
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
    
    export interface Played {
        begin: number;
        end:   number;
    }
    
    export interface ResLogs {
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
    
    export interface SeekLog {
        intervalId:        number;
        lastSeekStartTime: number;
        seekBefore:        number;
        sat:               number;
        sc:                number;
        buf_include:       number;
    }
    
    export interface Stall {
        sc:     number;
        startf: number;
        endf:   number;
        start:  number;
        end:    number;
        cost:   number;
        acc:    number;
    }
    
    export interface Tracker {
        disableAutoPageView: boolean;
        bridgeReport:        boolean;
        staging:             boolean;
        pluginInstances:     PluginInstance[];
        sended:              boolean;
        started:             boolean;
        destroy:             boolean;
        sdkReady:            boolean;
        adapters:            InnerContainer;
        loadType:            string;
        sdkStop:             boolean;
        name:                string;
        hook:                InnerContainer;
        remotePlugin:        InnerContainer;
        Types:               { [key: string]: string };
        logger:              TrackerLogger;
        spider:              Spider;
        appBridge:           InnerContainer;
        requestManager:      RequestManager;
        configManager:       ConfigManager;
        debugger:            Debugger;
        initConfig:          InitConfigClass;
        eventManager:        EventManager;
        tokenManager:        TokenManager;
        sessionManager:      SessionManager;
        inited:              boolean;
    }
    
    export interface ConfigManager {
        is_first_time:  boolean;
        configPersist:  boolean;
        initConfig:     InitConfigClass;
        eventCheck:     EventCheck;
        configKey:      string;
        sessionStorage: InnerContainer;
        localStorage:   InnerContainer;
        envInfo:        EnvInfo;
        ab_version:     string;
        evtParams:      Params;
        isLast:         boolean;
        domain:         string;
        ab_cache:       AbCache;
    }
    
    export interface AbCache {
        data:                 InnerContainer;
        uuid:                 string;
        timestamp:            number;
        ab_version_multilink: any[];
        ab_ext_version:       any[];
        ab_version:           any[];
    }
    
    export interface EnvInfo {
        user:   User;
        header: Header;
    }
    
    export interface Header {
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
    
    export interface Custom {
        network_type: string;
    }
    
    export interface User {
        user_unique_id: string;
        web_id:         string;
    }
    
    export interface EventCheck {
        config:              InitConfigClass;
        eventNameWhiteList:  string[];
        paramsNameWhiteList: string[];
        regStr:              InnerContainer;
    }
    
    export interface InitConfigClass {
        app_id:              number;
        channel:             ChannelEnum;
        log:                 boolean;
        disable_sdk_monitor: boolean;
        disable_heartbeat:   boolean;
        enable_ab_test:      boolean;
    }
    
    export interface Debugger {
        devToolReady:  boolean;
        devToolOrigin: string;
        sendAlready:   boolean;
        config:        InitConfigClass;
        app_id:        number;
        cacheStorgae:  InnerContainer;
        loadUrl:       string;
        filterEvent:   InnerContainer;
    }
    
    export interface EventManager {
        eventLimit:      number;
        eventCache:      any[];
        beconEventCache: any[];
        config:          InitConfigClass;
        configManager:   ConfigManager;
        eventCheck:      EventCheck;
        cacheStorgae:    InnerContainer;
        localStorage:    InnerContainer;
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
    
    export interface TrackerLogger {
        isLog: boolean;
        name:  string;
    }
    
    export interface PluginInstance {
        config?:             InitConfigClass;
        channel?:            ChannelEnum;
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
        changeListener?:     InnerContainer;
        readyStatus?:        boolean;
        exposureCache?:      any[];
        autoTrackStart?:     boolean;
        duration?:           number;
        reportUrl?:          string;
        eventCheck?:         EventCheck;
        cache?:              InnerContainer;
        retryWaitTime?:      number;
        retryStatus?:        boolean;
        retryCacheStatus?:   boolean;
        autotrack?:          boolean;
        spa?:                boolean;
        allowHash?:          boolean;
    }
    
    export interface RequestManager {
        config:        InitConfigClass;
        requestType:   string;
        supportBeacon: boolean;
        errorCode:     ErrorCode;
        customHeader:  InnerContainer;
    }
    
    export interface ErrorCode {
        NO_URL:       number;
        IMG_ON:       number;
        IMG_CATCH:    number;
        BEACON_FALSE: number;
        XHR_ON:       number;
        RESPONSE:     number;
        TIMEOUT:      number;
    }
    
    export interface SessionManager {
        storage:    InnerContainer;
        sessionKey: string;
        expireTime: number;
        sessionExp: number;
    }
    
    export interface Spider {
        spiderBot: string[];
    }
    
    export interface TokenManager {
        cacheToken:    CacheToken;
        config:        InitConfigClass;
        configManager: ConfigManager;
        storage:       InnerContainer;
        tokenKey:      string;
        expiresTime:   number;
        cookieDomain:  string;
        tokenType:     string;
        tokenReady:    boolean;
    }
    
    export interface CacheToken {
        web_id:         string;
        user_unique_id: string;
        timestamp:      number;
    }
    
    export interface URLLog {
        initial_url:  string;
        initial_host: string;
        initial_ip:   string;
    }
    
}
