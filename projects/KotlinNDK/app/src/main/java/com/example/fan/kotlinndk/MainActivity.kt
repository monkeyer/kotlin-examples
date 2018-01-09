package com.example.fan.kotlinndk

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Example of a call to a native method
//        sample_text.text = stringFromJNI()
        sample_text.text = GetStr()
        sample_text2.text = TestNative.GetStr()
    }

    /**
     * A native method that is implemented by the 'NativeLib' native library,
     * which is packaged with this application.
     */
    external fun GetStr(): String

    companion object {

        // Used to load the 'NativeLib' library on application startup.
        init {
            System.loadLibrary("NativeLib")
        }
    }
}
