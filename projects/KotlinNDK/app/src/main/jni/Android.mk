LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_MODULE = NativeLib

LOCAL_SRC_FILES := ../cpp/TestNative.cpp

LOCAL_LDLIBS := -landroid -llog -latomic

include $(BUILD_SHARED_LIBRARY)