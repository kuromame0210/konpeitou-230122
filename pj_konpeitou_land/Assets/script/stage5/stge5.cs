using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class stge5 : MonoBehaviour
{
    float time;
    bool is_incremet = true;
    public GameObject StageManager;

    public Text clicktext;

    public GameObject stage6_omikuji_detail_images;

    // Start is called before the first frame update
    void Start()
    {
        time = 0.0f;
        is_incremet = true;
        clicktext.gameObject.SetActive(false);

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
                StageManager.GetComponent<StageManager>().on_stage_count = global::StageManager.StageCount.stage6;
                StageManager.GetComponent<StageManager>().stageObj[4].gameObject.SetActive(false);
                StageManager.GetComponent<StageManager>().stageObj[5].gameObject.SetActive(true);

                time = 0.0f;
                is_incremet = true;
                clicktext.gameObject.SetActive(false);

                //ここで、ランダムな値によって、表示する内容を変えないといけない。ほとんどStageManagerスクリプトの中で完結している
                stage6_omikuji_detail_images.GetComponent<RawImage>().texture =
                    StageManager.GetComponent<StageManager>().omikuji_detail_images[StageManager.GetComponent<StageManager>().omikuji_randam_number];
            }
        }
    }

}
