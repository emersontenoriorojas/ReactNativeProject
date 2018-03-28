package com.myfirstdemoapp;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "MyFirstDemoApp";
    }
}
//
// private static final int OVERLAY_PERMISSION_REQ_CODE = 1212;
// @Override
// protected void onCreate(Bundle savedInstanceState) {
//     super.onCreate(savedInstanceState);
//         ...
//         if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
//             if (!Settings.canDrawOverlays(this)) {
//                 Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
//                         Uri.parse("package:" + getPackageName()));
//                 startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);
//             }
//         }
//         ...
// }
//
// @Override
// protected void onActivityResult(int requestCode, int resultCode, Intent data) {
//     if (requestCode == OVERLAY_PERMISSION_REQ_CODE) {
//         if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
//             if (!Settings.canDrawOverlays(this)) {
//                 Toast.makeText(this, "You cannot open the React Native app as you have denied the permission", Toast.LENGTH_SHORT).show();
//             }
//         }
//     }
// }
