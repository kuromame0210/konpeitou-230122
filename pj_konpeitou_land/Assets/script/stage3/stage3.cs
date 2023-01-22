using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class stage3 : MonoBehaviour
{
    //

    float time;
    bool is_incremet = true;

    public GameObject StageManager;

    //public AudioClip sound1;
    //AudioSource audioSource;

    public GameObject stage4_konpeitou;

    public Text titletext;
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
        if (time > 3.0f)
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
            //3秒たった後、クリックできるようになった後の状態
            if (Input.GetMouseButtonDown(0))
            {
                StageManager.GetComponent<StageManager>().on_stage_count = global::StageManager.StageCount.stage4;
                StageManager.GetComponent<StageManager>().stageObj[2].gameObject.SetActive(false);
                StageManager.GetComponent<StageManager>().stageObj[3].gameObject.SetActive(true);
                time = 0.0f;
                is_incremet = true;
                clicktext.gameObject.SetActive(false);

                //このタイミングで、７種類の中の1つを決める。ランダム関数で値を作成して、stagemanagerに格納する7種類なので、0から７
                int randam_num = Random.Range(0, 7);

                //ここで、ランダムな値によって、表示する内容を変えないといけない。ほとんどStageManagerスクリプトの中で完結している
                stage4_konpeitou.GetComponent<RawImage>().texture =
                    StageManager.GetComponent<StageManager>().konpeitou_images[randam_num];
                titletext.text = StageManager.GetComponent<StageManager>().konpeitou_title[randam_num];

                StageManager.GetComponent<StageManager>().omikuji_randam_number = randam_num;
            }
        }
    }

}
