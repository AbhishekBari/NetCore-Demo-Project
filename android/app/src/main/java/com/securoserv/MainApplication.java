package com.securoserv;

import android.app.Application;
import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.view.View;

import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.config.ReactFeatureFlags;
import com.facebook.react.uimanager.util.ReactFindViewUtil;
import com.facebook.soloader.SoLoader;

import com.netcore.android.Smartech;
import com.netcore.android.logger.SMTDebugLevel;

import com.netcore.android.smartechpush.SmartPush;

import com.securoserv.newarchitecture.MainApplicationReactNativeHost;


import java.lang.ref.WeakReference;
import java.lang.reflect.InvocationTargetException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.Set;


import io.hansel.core.logger.HSLLogLevel;
import io.hansel.react.HanselRn;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

  private final ReactNativeHost mNewArchitectureNativeHost =
      new MainApplicationReactNativeHost(this);

  @Override
  public ReactNativeHost getReactNativeHost() {
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      return mNewArchitectureNativeHost;
    } else {
      return mReactNativeHost;
    }
  }

  @Override
  public void onCreate() {
    super.onCreate();
    final Handler handler = new Handler(Looper.getMainLooper());
    // If you opted-in for the New Architecture, we enable the TurboModule system
    ReactFeatureFlags.useTurboModules = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());

    Smartech smartech = Smartech.getInstance(new WeakReference<>(this.getApplicationContext()));

    smartech.initializeSdk(this);
    Log.i("initilaze", "smartech sdk" );



    smartech.setDebugLevel(SMTDebugLevel.Level.VERBOSE);

    Log.i("initilaze", "setting smt logs");

      HSLLogLevel.all.setEnabled(true);
      HSLLogLevel.mid.setEnabled(true);
      HSLLogLevel.debug.setEnabled(true);


    try {  SmartPush smartPush = SmartPush.getInstance(new WeakReference<>(this));  smartPush.fetchAlreadyGeneratedTokenFromFCM(); } catch (Exception e) {   }


    Set<String> nativeIdSet = new HashSet<>();
    nativeIdSet.add("hansel_ignore_container");
    nativeIdSet.add("hansel_ignore_view_overlay");
    ReactFindViewUtil.addViewsListener(new ReactFindViewUtil.OnMultipleViewsFoundListener() {
      @Override
      public void onViewFound(final View view, String nativeID) {
        if (nativeID.equals("hansel_ignore_view_overlay") || nativeID.equals("hansel_dynamic_view")) {
          Log.i("initilaze", "igonore container");
          Log.d("coming in ignore", "hansel main");
          if (view.getTag() == null) {
            handler.postDelayed(new Runnable() {
              @Override
              public void run() {
                ReactFindViewUtil.notifyViewRendered(view);
              }
            }, 1);
            return;
          }
        }

        if (nativeID.equals("hansel_ignore_view_overlay")) {
          String[] values = view.getTag().toString().split("#");
          int parentsLayerCount = Integer.parseInt(values[0]);
          int childLayerIndex;
          if (values.length < 2 || values[1].isEmpty()) {
            Log.i("initilaze", "igonore container value");
            Log.d("coming in ignore", "hansel");
            childLayerIndex = 1;
          } else {
            childLayerIndex = Integer.parseInt(values[1]);
          }
          HanselRn.setHanselIgnoreViewTag(view, parentsLayerCount, childLayerIndex);
          Log.i("initilaze", "igonore container parentsLayerCount");

        } else if (nativeID.equals("hansel_dynamic_view")) {
          String[] values = view.getTag().toString().split("#");
          String hanselIndex = values[0];
          int N;
          if (values.length < 2 || values[1].isEmpty()) {
            N = 0;
          } else {
            N = Integer.parseInt(values[1]);
          }
          HanselRn.setDynamicHanselIndex(view, hanselIndex, N);
        } else {
          view.setTag(io.hansel.react.R.id.hansel_ignore_view, true);
        }
      }
    }, nativeIdSet);


  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.securoserv.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
