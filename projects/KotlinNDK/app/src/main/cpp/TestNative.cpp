#include <jni.h>
#include <string>

extern "C"
JNIEXPORT jstring

JNICALL
Java_com_example_fan_kotlinndk_MainActivity_GetStr(JNIEnv *env, jclass type) {

    std::string str = "My First Native Test for kotlin!!";
    return env->NewStringUTF(str.c_str());
}

extern "C"
JNIEXPORT jstring

JNICALL
Java_com_example_fan_kotlinndk_TestNative_GetStr(JNIEnv *env, jclass type) {

    // TODO
    std::string str = "My First Native Test for java!!";
    return env->NewStringUTF(str.c_str());
}