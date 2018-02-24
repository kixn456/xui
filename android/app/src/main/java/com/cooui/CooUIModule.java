package com.cooui;

/**
 * Created by qinchuana on 2017/11/17.
 */

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
import android.app.Activity;
import android.content.ComponentName;
import android.content.Intent;
import android.net.Uri;
import android.content.SharedPreferences;
import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.os.Build;
import android.provider.Settings.Secure;

import java.util.Map;
import java.util.HashMap;

import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

/**
 * Intent module. Launch other activities or open URLs.
 */
public class CooUIModule extends ReactContextBaseJavaModule {
    ReactApplicationContext reactContext;

    public CooUIModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "CooUIModule";
    }

    /**
     * Return the URL the activity was started with
     *
     * @param promise a promise which is resolved with the initial URL
     */
    @ReactMethod
    public void resetURL(Promise promise) {
        try {
            Activity currentActivity = getCurrentActivity();
            if (currentActivity != null) {
                Intent intent = new Intent(Intent.ACTION_MAIN);
                currentActivity.setIntent(intent);
            }
            promise.resolve(true);
        } catch (Exception e) {
            promise.reject(new JSApplicationIllegalArgumentException(
                    "Could not reset URL"));
        }
    }

    @ReactMethod
    public void setLanguage(String value, Promise promise) {
        try {
            SharedPreferences spf = getCurrentActivity().getSharedPreferences("CooMartsClient", Context.MODE_PRIVATE);
            spf.edit().putString("language", value).commit();
            promise.resolve(true);
        } catch (Exception e) {
            promise.reject(new JSApplicationIllegalArgumentException("set error"));
        }
    }

    @ReactMethod
    public String getLanguage(String defVvalue) {
        SharedPreferences spf = getCurrentActivity().getSharedPreferences("CooMartsClient", Context.MODE_PRIVATE);
        StringBuilder builder = new StringBuilder();
        builder.append(spf.getString("language", defVvalue));
        return builder.toString();
    }
    @ReactMethod
    public void restartApp(Promise promise) {
        getCurrentActivity().recreate();
        promise.resolve(true);
    }

    @ReactMethod
    public String getStatusBarHeight() {
        int result = 0;
        int resourceId = this.reactContext.getResources().getIdentifier("status_bar_height", "dimen", "android");
        if (resourceId > 0) {
            result = this.reactContext.getResources().getDimensionPixelSize(resourceId);
        }
        return Integer.toString(result / 2);
      }

    @Override
    public Map<String, Object> getConstants() {
        HashMap<String, Object> constants = new HashMap<String, Object>();
        PackageManager packageManager = this.reactContext.getPackageManager();
        String packageName = this.reactContext.getPackageName();
        constants.put("languageString", this.getLanguage(null));
        constants.put("statusBarHeight", this.getStatusBarHeight());
        return constants;
    }
}

