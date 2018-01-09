package com.example.fan.kotlinndk;

/**
 * Created by fan on 2017/11/28.
 */

public class TestNative {
    static {
        System.loadLibrary("NativeLib");
    }

    public static native String GetStr();
}
