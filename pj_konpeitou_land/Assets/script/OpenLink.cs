using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OpenLink : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }

    public void onClick()
    {
        Application.OpenURL("https://konpeitouyasan.com/");//""の中には開きたいWebページのURLを入力します
    }
}
