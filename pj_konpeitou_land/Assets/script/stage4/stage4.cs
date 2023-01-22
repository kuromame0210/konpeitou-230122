using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class stage4 : MonoBehaviour
{

    float time;
    bool is_incremet = true;

    public GameObject StageManager;

    //public AudioClip sound1;
    //AudioSource audioSource;

    public GameObject stage5_omikuji_tite_images;

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
            if (Input.GetMouseButtonDown(0))
            {
                StageManager.GetComponent<StageManager>().on_stage_count = global::StageManager.StageCount.stage5;
                StageManager.GetComponent<StageManager>().stageObj[3].gameObject.SetActive(false);
                StageManager.GetComponent<StageManager>().stageObj[4].gameObject.SetActive(true);
                time = 0.0f;
                is_incremet = true;
                clicktext.gameObject.SetActive(false);

                //ここで、ランダムな値によって、表示する内容を変えないといけない。ほとんどStageManagerスクリプトの中で完結している
                stage5_omikuji_tite_images.GetComponent<RawImage>().texture =
                    StageManager.GetComponent<StageManager>().omikuji_tite_images[StageManager.GetComponent<StageManager>().omikuji_randam_number];
            }
        }
    }

}
