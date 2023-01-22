using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class stage7 : MonoBehaviour
{

    float time;
    bool is_incremet = true;

    public GameObject StageManager;
    public GameObject obj;

    public Text clicktext;


    // Start is called before the first frame update
    void Start()
    {
        time = 0.0f;
        is_incremet = true;
        clicktext.gameObject.SetActive(false);
        //audioSource = GetComponent<AudioSource>();


    }

    // Update is called once per frame
    void Update()
    {
        if (time > 1.5f)
        {
            obj.gameObject.SetActive(true);
            //ここで、ランダムな値によって、表示する内容を変えないといけない。ほとんどStageManagerスクリプトの中で完結している
            //まずは、おみくじの結果を変更
            obj.transform.GetChild(0).GetComponent<RawImage>().texture =
                StageManager.GetComponent<StageManager>().omikuji_tite_images[StageManager.GetComponent<StageManager>().omikuji_randam_number];

            //次に、コンペイトウの種類を変更（これはアニメーションさせたい）
            obj.transform.GetChild(1).GetComponent<RawImage>().texture =
                StageManager.GetComponent<StageManager>().konpeitou_images[StageManager.GetComponent<StageManager>().omikuji_randam_number];
            obj.transform.GetChild(2).GetComponent<RawImage>().texture =
                StageManager.GetComponent<StageManager>().konpeitou_images[StageManager.GetComponent<StageManager>().omikuji_randam_number];
            obj.transform.GetChild(3).GetComponent<RawImage>().texture =
                StageManager.GetComponent<StageManager>().konpeitou_images[StageManager.GetComponent<StageManager>().omikuji_randam_number];
            obj.transform.GetChild(4).GetComponent<RawImage>().texture =
                StageManager.GetComponent<StageManager>().konpeitou_images[StageManager.GetComponent<StageManager>().omikuji_randam_number];

            //clicktext.gameObject.SetActive(true);
        }
        if (time > 3f)
        {
            is_incremet = false;
            clicktext.gameObject.SetActive(true);
        }
        

        if (is_incremet)
        {
            time += Time.deltaTime;
        }
        else if (!is_incremet)
        {
            if (Input.GetMouseButtonDown(0))
            {
                StageManager.GetComponent<StageManager>().on_stage_count = global::StageManager.StageCount.stage8;
                StageManager.GetComponent<StageManager>().stageObj[6].gameObject.SetActive(false);
                StageManager.GetComponent<StageManager>().stageObj[7].gameObject.SetActive(true);

                time = 0.0f;
                is_incremet = true;
                obj.gameObject.SetActive(false);
                clicktext.gameObject.SetActive(false);
            }
        }
    }
}
